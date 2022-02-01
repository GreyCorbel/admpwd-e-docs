# Logging of CSE next generation (versions 8 and above)
Management runtime logs all events in Application Event Log of local computer. Log messages are English only, but can be localized or additional language can be added, if necessary, in the future.

*Note*: This registry value takes precedence over Logging level registry policy - see [Configuration](Configuration.md) section for details

Within the new generation of CSE, we distinguish two basic types of tasks:
1. Management clients activity
2. Worker activity

Semantic of possible values is as follows:
<table>
<thead>
<tr>
<th width="20%">IDs</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><100, 1 000)</td>
<td>Definition for tasks of management clients activity.</td>
</tr>
<tr>
<td><1 000, n)</td>
<td>Definition for tasks of worker activity.</td>
</tr>
</tbody>
</table>

Event source for all events reported by management runtime is always **AdmPwd**.  
The following table summarizes the events that can occur in the Event Log:

## Management clients activity:
<table>
<thead>
<tr>
<th width="7%">ID</th>
<th width="15%">Severity</th>
<th width="35%">Description</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td>100</td>
<td>Informational</td>
<td>Management worker started: %1</td>
<td>This event is logged when the CSE started. 

%1 placeholder for management worker type.</td>
</tr>
<tr>
<td>101</td>
<td>Informational</td>
<td>Management Worker stopped: %1</td>
<td>This event is logged when the CSE stopped. 

%1 placeholder for management worker type.</td>
</tr>
</tbody>
</table>

## Management worker activity:
<table>
<thead>
<tr>
<th width="5%">ID</th>
<th width="10%">Severity</th>
<th width="30%">Description</th>
<th>Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td>1000</td>
<td>Informational</td>
<td>Management operation started.</td>
<td>This event occurs when management runtime start its routine. Routine starts by design each 3600 seconds, it can be run also manualy by restarting win32 service called AdmPwd.E Management Client).</td>
</tr>
<tr>
<td>1001</td>
<td>Informational</td>
<td>Management operation completed. Next in %1 seconds.</td>
<td>This event is logged when management runtime finished namagement operation and wait for another routine start (by desigh each 3600 seconds).</td>
</tr>
<tr>
<td>1201</td>
<td>Error</td>
<td>Management operation error. %nOperation: %1%nError: %2</td>
<td>Occurs when management runtime fails any task. 

%1 is placeholder for operation type. 
%2 is placeholder for error message.</td>
</tr>
<tr>
<td>1299</td>
<td>Error</td>
<td>General error during management operation. Error: %1</td>
<td>This event is logged when any general error occurs. 

%1 is placeholder for error message.</td>
</tr>
<tr>
<td>1002</td>
<td>Informational</td>
<td>Password management not allowed.</td>
<td>This event is logged when Password management is not allowed. Enable this policy in GPO.</td>
</tr>
<tr>
<td>1004</td>
<td>Informational</td>
<td>Detected password state: %1.</td>
<td>Occurs when management runtime register new password state.

%1 is placeholder for password state.</td>
</tr>
<tr>
<td>1005</td>
<td>Informational</td>
<td>Password reported to AD via proxy</td>
<td>This event is logged when PDS sucessfuly passed password to Active Directory. 

<em>Note: occurs when GPO Proxy all AD request via PDS is switched on.</em> </td>
</tr>
<tr>
<td>1105</td>
<td>Warning</td>
<td>Failed to communicate with password reporting proxy.%nProxy: %1%nError:%2</td>
<td>This event is logged in case when management runtime could not report password to Active Director through one of defined PDS proxies. 

%1 is placeholder for PDS proxy name. 
%2 is placeholder for error description.
</td>
</tr>
<tr>
<td>1205</td>
<td>Error</td>
<td>Could not report password via any of configured proxies.</td>
<td>This event is logged in case that management runtime could not report password to Active Directory through any of defined PDS proxies.</td>
</tr>
<tr>
<td>1006</td>
<td>Informational</td>
<td>Password of managed admin account updated</td>
<td>This event is logged when password of managed admin account has been sucessfully updated.</td>
</tr>
<tr>
<td>1007</td>
<td>Information</td>
<td>It is not necessary to change password yet. Will be changed in %1 days, %2 hours.</td>
<td>%1 placeholder for days remaining for password change, 

2% placeholder for hours remainig for password change.</td>
</tr>
<tr>
<td>1300</td>
<td>Verbose</td>
<td>%2</td>
<td>%2 is placeholder for doplnit.</td>
</tr>
</tbody>
</table>

*Notes*:
* Generally, all events with severity “Error” are blocking, so in case that any error occurs, no other tasks are performed and management runtime terminates its processing
* Event source for the Event Log is embedded in the same executable as main GPO executive. Reason for this decision was to make the deployment simple