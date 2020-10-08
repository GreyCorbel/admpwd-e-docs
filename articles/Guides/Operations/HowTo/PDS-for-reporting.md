# How to install PDS just for client activity reporting
In security sensitive environments, where managed machines are in less secure AD forest and PDS in more secure AD forest (such as in Red Forest deployment model), it may not be allowed to open port 61184/udp (or other custom udp port if you don't prefer default port) on firewall from managed machines to PDS instance in more secure AD forest.

Absence of firewall port open prevents managed machines from sending client activity reports to PDS instance when Client Activity Reporting GPO is enabled. For such situation, you may want to operate instance of PDS in AD forest where managed machines are, just to collect and process activity logs from managed machines.

## Configuration
This setup is possible and actually really simple. You just install PDS instance on any suitable machine, and point managed machines via "Client Activity Reporting" GPO to this instance. this standalone machine does not need:
* Any license file - can be operated in Freeware mode
* Any decryption key pairs - it does not handle requests from management tools for password reads/resets
* Any permissions on AD side - as it does not handle requests from management tools, it does not need to have permission to read/write ms-Mcs-AdmPwd* attributes in AD
  * Actually, licensing validation process inside PDS counts managed machines by population of ms-Mcs-AdmPwd attribute - so when PDS does not have permission to see the value (which is default state as attribute is flagged as Confidential), it does not complain about insufficient licenses
* Specific handling because it does not contain / handle any secrets - it only holds / processes Client Activity records in ```GreyCorbel-AdmPwd.E-ClientActivity-Operational``` Event log

## Requirements
Only thing you will have to do is to prevent this PDS instance register its Autodiscover SRV record in DNS. This is because SRV records may be used by management tools to discover instance of PDS, and we do not want management tools to use this very instance for normal operation. To disable autodiscover SRV record registration, set RegistrationInterval to 0 in PDS.config file and restart the PDS service.

See [PDS Configuration specification][1] for details on PDS configuration parameters and cmdlets that manage the configuration.

[1]: /Articles/Specification/Password-Decryption-Service/Configuration.md

