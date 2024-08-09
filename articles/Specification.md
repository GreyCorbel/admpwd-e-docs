# Technical specification
`Updated: 09 Aug 2024`  

Solution consists of the following components:
* Client-side management runtime (also called CSE)
* Server-side management service (password decryption service, or PDS)
* Management tools
  * Powershell management module
  * Fat client UI
  * GPO templates

## Supported platforms
All Windows platforms starting from Windows XP / 2003 up to Windows 11/2022 - including Windows Server 2022 Nano.

## High-level architecture 
is shown in following figure:

![PDS Multi Instancy](/images/PDS/architecture.jpg)


Client side management components come in dedicated installation package; server side management service comes as separate package. 

This specification provides complete technical reference for all components of solution that comes in official installation packages.

Content in this section provides technical specification of the solution. Content is split into the following categories:  
* [Managed Clients][1]  
* [Active Directory][2]  
* [Password Decryption Service][3]  
* [Management tools][4]  
* [Installers][5]

  [1]: Specification/Managed-Clients.html
  [2]: Specification/Active-Directory.md
  [3]: Specification/Password-Decryption-Service.md
  [4]: Specification/Management-Tools.md
  [5]: Specification/Installers.md

There are also supporting and integration tools available, namely:
* Integration SDK that allows easy integration of solution toother products
  * available as [NuGet package](https://www.nuget.org/packages/Greycorbel.AdmPwd-E.PDSWrapper/)
* Web UI - available as open source project on [Github](https://github.com/GreyCorbel/admpwd-e/tree/master/Clients/WebUI)
* Sample tools that demonstrate usage of Integration SDK - available as open source on [Github](https://github.com/GreyCorbel/admpwd-e/tree/master/Clients)
* Implementation of additional keystores for storage of proivate keys maintained by PDS - available as open source on [Github](https://github.com/GreyCorbel/admpwd-e/tree/master/KeyStores)

Relevant documentation and specifications are available on Github, together with respective tools.
## Network communication requirements

| Source | Target | Port | Note |
|---|---|---|---|
| Managed machine | AD | 389/tcp | Encrypted via Kerberos encryption |
|  |  | 88/tcp/udp | Kerberos auth |
| Managed machine | PDS | 61184/udp | Just for centralized activity reporting. Needs to be turned on via GPO; turned off by default |
| PDS | AD | 389/tcp | Encrypted via Kerberos encryption |
|  |  | 88/tcp/udp | Kerberos auth |
| Management tools | AD | 389/tcp | Encrypted via Kerberos encryption Direct communication to AD to extend AD schema and configure permissions. Password manipulation is done via PDS. |
|  |  | 88/tcp/udp | Kerberos auth |
| Management tools | PDS | 61184/tcp | Encrypted via Kerberos encryption |
|  |  | 88/tcp/udp | Kerberos auth |