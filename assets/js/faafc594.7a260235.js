"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[917],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=i,k=u["".concat(l,".").concat(b)]||u[b]||m[b]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5925:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],s={id:"supported-systems",title:"Supported Systems"},l=void 0,p={unversionedId:"guides/supported-systems",id:"guides/supported-systems",title:"Supported Systems",description:"Currently Supported platforms:",source:"@site/../docs/guides/supported-systems.md",sourceDirName:"guides",slug:"/guides/supported-systems",permalink:"/mongodb-memory-server/docs/guides/supported-systems",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/supported-systems.md",tags:[],version:"current",frontMatter:{id:"supported-systems",title:"Supported Systems"},sidebar:"guides",previous:{title:"Known Issues",permalink:"/mongodb-memory-server/docs/guides/known-issues"},next:{title:"Integration with Test Runners",permalink:"/mongodb-memory-server/docs/guides/integration-examples/test-runners"}},d={},u=[{value:"Windows",id:"windows",level:2},{value:"MacOS",id:"macos",level:2},{value:"Linux",id:"linux",level:2},{value:"Ubuntu (and based on systems)",id:"ubuntu-and-based-on-systems",level:3},{value:"Debian",id:"debian",level:3},{value:"Fedora",id:"fedora",level:3},{value:"Rhel",id:"rhel",level:3},{value:"Amazon",id:"amazon",level:3},{value:"ElementaryOS",id:"elementaryos",level:3},{value:"Linux Mint",id:"linux-mint",level:3},{value:"Suse",id:"suse",level:3},{value:"Arch",id:"arch",level:3},{value:"Gentoo",id:"gentoo",level:3},{value:"Alpine",id:"alpine",level:3}],m={toc:u},b="wrapper";function k(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(b,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Currently Supported platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"win32")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"macos")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"osx")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"darwin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"linux"))),(0,r.kt)("p",null,"Officially Supported Architectures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x64")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"x86_64")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"arm64")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"aarch64")," (only some linux distros have binaries)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"del"},"ia32")," / ",(0,r.kt)("inlineCode",{parentName:"del"},"i686")," / ",(0,r.kt)("inlineCode",{parentName:"del"},"i386"))," (There are only binaries up to ~3.2 and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodkz/mongodb-memory-server/issues/638"},"will be removed with the next MMS version"),")")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On systems that have native arch translation (like ARM MacOS), the architecture will need to be overwritten with ",(0,r.kt)("inlineCode",{parentName:"p"},"MONGOMS_ARCH=x64"),".")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Legend:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{class:"badge badge--success"},"Supported")," means that it is supported by mongodb natively or is a distro that is based on a supported distro."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{class:"badge badge--warning"},"Untested")," means that it is not tested on hardware and so not verified to work."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{class:"badge badge--warning"},"Outdated")," means that the current mappings for MMS are outdated and may not have proper tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{class:"badge badge--danger"},"Unsupported")," means that it is unsupported by MMS *and* mongodb."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{class:"badge badge--secondary"},"Working")," means that it is supported by MMS but not by mongodb natively and not based on a supported distro.")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("span",{class:"badge badge--success"},"Supported"),(0,r.kt)("p",null,"Should just work out of the box"),(0,r.kt)("h2",{id:"macos"},"MacOS"),(0,r.kt)("span",{class:"badge badge--success"},"Supported"),(0,r.kt)("p",null,"On x64 systems, it should work right out of the box",(0,r.kt)("br",null),"\nSince Mongodb 6.0.0, they have ",(0,r.kt)("inlineCode",{parentName:"p"},"arm64")," binaries",(0,r.kt)("br",null),"\nUses ",(0,r.kt)("inlineCode",{parentName:"p"},"arm64")," binaries for all versions above or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.0"),", for older versions falls back to using ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64")," binaries (requires Rosetta)",(0,r.kt)("br",null),"\nUsage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64")," binary can be forced with ",(0,r.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/config-options#arch"},(0,r.kt)("inlineCode",{parentName:"a"},"MONGOMS_ARCH=x64"))," (or equal in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),")"),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("p",null,"Depends on the distribution, many common ones should just work right out of the box"),(0,r.kt)("h3",{id:"ubuntu-and-based-on-systems"},"Ubuntu (and based on systems)"),(0,r.kt)("span",{class:"badge badge--success"},"Supported"),(0,r.kt)("p",null,"(uses mongodb's ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu")," release)",(0,r.kt)("br",null),"\nLowest supported Distribution version is ",(0,r.kt)("inlineCode",{parentName:"p"},"1404"),(0,r.kt)("br",null),"\nHighest version is ",(0,r.kt)("inlineCode",{parentName:"p"},"2204"),(0,r.kt)("br",null),"\nDefault version is ",(0,r.kt)("inlineCode",{parentName:"p"},"1404"),(0,r.kt)("br",null),"\nArchitectures Supported: ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"arm64"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"aarch64"),")"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Lower Versions than ",(0,r.kt)("inlineCode",{parentName:"p"},"2004")," may be used if mongodb dosnt provide binaries for an lower version of mongodb for an higher version of ubuntu")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since Mongodb ",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.4")," there are binaries for ",(0,r.kt)("inlineCode",{parentName:"p"},"2204"),", any version before is mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"2204")," (or earlier) and will require ",(0,r.kt)("inlineCode",{parentName:"p"},"libssl1.1")," to be installed.",(0,r.kt)("br",{parentName:"p"}),"\n","See ",(0,r.kt)("a",{parentName:"p",href:"https://jira.mongodb.org/browse/SERVER-62300"},"this mongodb issue"),".")),(0,r.kt)("h3",{id:"debian"},"Debian"),(0,r.kt)("span",{class:"badge badge--success"},"Supported"),(0,r.kt)("p",null,"(uses mongodb's ",(0,r.kt)("inlineCode",{parentName:"p"},"debian")," release)",(0,r.kt)("br",null),"\nLowest supported Distribution version is ",(0,r.kt)("inlineCode",{parentName:"p"},"71"),(0,r.kt)("br",null),"\nHighest version is ",(0,r.kt)("inlineCode",{parentName:"p"},"11"),(0,r.kt)("br",null),"\nDefault version is ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," (when in ",(0,r.kt)("inlineCode",{parentName:"p"},"unstable")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"testing"),", otherwise none)"),(0,r.kt)("h3",{id:"fedora"},"Fedora"),(0,r.kt)("span",{class:"badge badge--success"},"Supported"),(0,r.kt)("p",null,"(uses mongodb's ",(0,r.kt)("inlineCode",{parentName:"p"},"rhel")," release)",(0,r.kt)("br",null),"\nLowest supported Distribution version is ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),(0,r.kt)("br",null),"\nHighest version is ",(0,r.kt)("inlineCode",{parentName:"p"},"36")," (see note)",(0,r.kt)("br",null),"\nDefault version is ",(0,r.kt)("inlineCode",{parentName:"p"},"34")," (when above or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"34"),", otherwise none)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Fedora 36 and onwards dont ship openssl1.1 anymore by default and currently needs to be manually installed.",(0,r.kt)("br",{parentName:"p"}),"\n","There are currently no newer mongodb builds that support the newer provided openssl.")),(0,r.kt)("h3",{id:"rhel"},"Rhel"),(0,r.kt)("span",{class:"badge badge--warning"},"Untested")," ",(0,r.kt)("span",{class:"badge badge--warning"},"Outdated"),(0,r.kt)("p",null,"(uses mongodb's ",(0,r.kt)("inlineCode",{parentName:"p"},"rhel")," release)",(0,r.kt)("br",null),"\nLowest supported Distribution version is ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),(0,r.kt)("br",null),"\nHighest version is ",(0,r.kt)("inlineCode",{parentName:"p"},"8"),(0,r.kt)("br",null),"\nDefault version is ",(0,r.kt)("inlineCode",{parentName:"p"},"70"),(0,r.kt)("br",null),"\nArchitectures Supported: ",(0,r.kt)("inlineCode",{parentName:"p"},"x86_64"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"arm64"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"aarch64"),")"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"arm64"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"aarch64")," support is only for Rhel 8(.2)")),(0,r.kt)("h3",{id:"amazon"},"Amazon"),(0,r.kt)("span",{class:"badge badge--success"},"Supported"),(0,r.kt)("p",null,"(uses mongodb's ",(0,r.kt)("inlineCode",{parentName:"p"},"amazon")," release)",(0,r.kt)("br",null),"\nLowest supported Distribution version is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),(0,r.kt)("br",null),"\nHighest version is ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),(0,r.kt)("br",null),"\nDefault version is ",(0,r.kt)("inlineCode",{parentName:"p"},"1")),(0,r.kt)("h3",{id:"elementaryos"},"ElementaryOS"),(0,r.kt)("span",{class:"badge badge--warning"},"Untested")," ",(0,r.kt)("span",{class:"badge badge--warning"},"Outdated"),(0,r.kt)("p",null,"(uses mongodb's ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu")," release)",(0,r.kt)("br",null),"\nLowest supported Distribution version is ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"0.3"),")",(0,r.kt)("br",null),"\nHighest version is ",(0,r.kt)("inlineCode",{parentName:"p"},"6"),(0,r.kt)("br",null),"\nDefault version is ",(0,r.kt)("inlineCode",{parentName:"p"},"6")),(0,r.kt)("h3",{id:"linux-mint"},"Linux Mint"),(0,r.kt)("span",{class:"badge badge--success"},"Supported"),(0,r.kt)("p",null,"(uses mongodb's ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu")," release)",(0,r.kt)("br",null),"\nLowest supported Distribution version is ",(0,r.kt)("inlineCode",{parentName:"p"},"17"),(0,r.kt)("br",null),"\nHighest version is ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),(0,r.kt)("br",null),"\nDefault version is ",(0,r.kt)("inlineCode",{parentName:"p"},"20")),(0,r.kt)("h3",{id:"suse"},"Suse"),(0,r.kt)("span",{class:"badge badge--warning"},"Untested")," ",(0,r.kt)("span",{class:"badge badge--warning"},"Outdated"),(0,r.kt)("p",null,"(uses mongodb's ",(0,r.kt)("inlineCode",{parentName:"p"},"suse")," release)",(0,r.kt)("br",null),"\nLowest supported Distribution version is ",(0,r.kt)("inlineCode",{parentName:"p"},"11"),(0,r.kt)("br",null),"\nHighest version is ",(0,r.kt)("inlineCode",{parentName:"p"},"12"),(0,r.kt)("br",null),"\nDefault version is none"),(0,r.kt)("h3",{id:"arch"},"Arch"),(0,r.kt)("span",{class:"badge badge--danger"},"Unsupported")," ",(0,r.kt)("span",{class:"badge badge--secondary"},"Working"),(0,r.kt)("p",null,"There are no official mongodb builds for Arch Distributions, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu")," binaries work on most Arch systems, so they are used.",(0,r.kt)("br",null),"\nCurrently Mapping to: ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu2204")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Because Arch* dosnt base on ubuntu, there is no specific ubuntu version associated with an arch version, so it defaults to highest supported ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu")," version")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MongoDB Binary versions before ",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.4")," require OpenSSL 1.1 installed, on arch can be installed via ",(0,r.kt)("inlineCode",{parentName:"p"},"core/openssl-1.1"),".")),(0,r.kt)("h3",{id:"gentoo"},"Gentoo"),(0,r.kt)("span",{class:"badge badge--danger"},"Unsupported")," ",(0,r.kt)("span",{class:"badge badge--secondary"},"Working"),(0,r.kt)("p",null,"There are no official mongodb builds for Gentoo Distributions, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"debian")," binaries work on most Gentoo systems, so they are used.",(0,r.kt)("br",null),"\nCurrently Mapping to: ",(0,r.kt)("inlineCode",{parentName:"p"},"debain11")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Because Gentoo dosnt base on debian, there is no specific debian version associated with an gentoo version, so it defaults to highest supported ",(0,r.kt)("inlineCode",{parentName:"p"},"debian")," version")),(0,r.kt)("h3",{id:"alpine"},"Alpine"),(0,r.kt)("span",{class:"badge badge--danger"},"Unsupported"),(0,r.kt)("p",null,"There are no official mongodb builds alpine, though there are some unoffical build of mongodb build for it which can be used"))}k.isMDXComponent=!0}}]);