import { promises as fspromises } from 'fs';
import resolveConfig, {
  envToBool,
  findPackageJson,
  processConfigOption,
  ResolveConfigVariables,
} from '../resolveConfig';
import * as utils from '../utils';
import camelCase from 'camelcase';

const outerPackageJson = {
  config: {
    mongodbMemoryServer: {
      inner: false,
      version: '3.0.0',
    },
  },
};
const innerPackageJson = {
  config: {
    mongodbMemoryServer: {
      inner: true,
      version: '4.0.0',
    },
  },
};

describe('resolveConfig', () => {
  const originalDir = process.cwd();
  let tmpDir: string;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('findPackageJson', () => {
    beforeAll(async () => {
      // Set up test project/subproject structure in a temporary directory:
      //
      //     project/
      //     |-- subproject/
      //     |   +-- package.json
      //     +-- package.json

      tmpDir = await utils.createTmpDir('mongo-mem-resolve');
      const tmpName = tmpDir;

      await fspromises.mkdir(`${tmpName}/project`);
      await fspromises.mkdir(`${tmpName}/project/subproject`);

      // prettier-ignore
      await Promise.all([
        fspromises.writeFile(
          `${tmpName}/project/package.json`,
          JSON.stringify(outerPackageJson)
        ),
        fspromises.writeFile(
          `${tmpName}/project/subproject/package.json`,
          JSON.stringify(innerPackageJson)
        ),
      ]);
    });

    afterAll(async () => {
      process.chdir(originalDir);
      await utils.removeDir(tmpDir);
    });

    test('in project', () => {
      // expect to get the outer package.json
      process.chdir(`${tmpDir}/project`);
      const out = findPackageJson();
      utils.assertion(!utils.isNullOrUndefined(out));
      expect(resolveConfig(ResolveConfigVariables.VERSION)).toBe('3.0.0');
      expect(out.config.inner).toBe(false);
    });

    test('in subproject', () => {
      // expect to get the inner package.json
      process.chdir(`${tmpDir}/project/subproject`);
      const out = findPackageJson();
      utils.assertion(!utils.isNullOrUndefined(out));
      expect(resolveConfig(ResolveConfigVariables.VERSION)).toBe('4.0.0');
      expect(out.config.inner).toBe(true);
    });

    test('with explicit directory in reInitializePackageJson', () => {
      // expect to get the inner package.json
      process.chdir(`${tmpDir}/project`);
      const out = findPackageJson(`${tmpDir}/project/subproject`);
      utils.assertion(!utils.isNullOrUndefined(out));
      expect(resolveConfig(ResolveConfigVariables.VERSION)).toBe('4.0.0');
      expect(out.config.inner).toBe(true);
    });
  });

  describe('envToBool', () => {
    it('should resolve all supported cases to right booleans', () => {
      expect(envToBool('1')).toStrictEqual(true);
      expect(envToBool('on')).toStrictEqual(true);
      expect(envToBool('ON')).toStrictEqual(true);
      expect(envToBool('yes')).toStrictEqual(true);
      expect(envToBool('YES')).toStrictEqual(true);
      expect(envToBool('true')).toStrictEqual(true);
      expect(envToBool('TRUE')).toStrictEqual(true);

      expect(envToBool('anythingelse')).toStrictEqual(false);
      expect(envToBool('false')).toStrictEqual(false);
    });

    it('should return false when input is not a string', () => {
      expect(
        // @ts-expect-error "envToBool" only supports "string" as a input
        envToBool(true)
      ).toStrictEqual(false);
    });
  });

  describe('processConfigOptions', () => {
    it('should return a empty object when input was not a object', () => {
      expect(processConfigOption(undefined, '')).toStrictEqual({});

      expect(processConfigOption('', '')).toStrictEqual({});
    });

    it('should return the input with being processed (relative)', () => {
      const filePath = '/some/path/to/somewhere';
      const downloadDirPath = './relative/';
      const systemBinaryPath = './sysBinary/';
      const ccDownloadDir = camelCase(ResolveConfigVariables.DOWNLOAD_DIR);
      const ccSystemBinary = camelCase(ResolveConfigVariables.SYSTEM_BINARY);
      const input = {
        [ccDownloadDir]: downloadDirPath,
        [ccSystemBinary]: systemBinaryPath,
        somethingRandom: 'hello',
      };

      const output = processConfigOption(input, filePath);

      expect(output.somethingRandom).toStrictEqual('hello');
      expect(output[ccDownloadDir]).toStrictEqual('/some/path/to/somewhere/relative');
      expect(output[ccSystemBinary]).toStrictEqual('/some/path/to/somewhere/sysBinary');
    });

    it('should return the input with being processed (absolute)', () => {
      const filePath = '/some/path/to/somewhere';
      const downloadDirPath = '/relative/';
      const systemBinaryPath = '/sysBinary/';
      const ccDownloadDir = camelCase(ResolveConfigVariables.DOWNLOAD_DIR);
      const ccSystemBinary = camelCase(ResolveConfigVariables.SYSTEM_BINARY);
      const input = {
        [ccDownloadDir]: downloadDirPath,
        [ccSystemBinary]: systemBinaryPath,
        somethingRandom: 'hello',
      };

      const output = processConfigOption(input, filePath);

      expect(output.somethingRandom).toStrictEqual('hello');
      expect(output[ccDownloadDir]).toStrictEqual('/relative');
      expect(output[ccSystemBinary]).toStrictEqual('/sysBinary');
    });
  });
});
