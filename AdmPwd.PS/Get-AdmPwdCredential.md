---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdCredential

## SYNOPSIS
Returns credential for local admin or managed domain account, and optionally schedules reset of retrieved password.

## SYNTAX
```powershellGet-AdmPwdCredential [-UserName] <String> [[-ForestDnsName] <String>] [[-ResetAfter] <DateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
Returns credential for managed domain account.
Replacement of Get-Credential cmdlet for accounts with automatically managed password.
Optionally schedules reset of retrievede password after given time.
Password is then reset during next PDS management cycle (every 10 minutes by default).

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdCredential -AccountName:MyAccount@mydomain.com -ResetAfter:"1.9.2019 15:00"
```

Requests credentials with password  for managed domain account with userPrincipalName MyAccount@mydomain.com and schedules to reset it after September 1, 2019 3PM

### Example 2
```powershell
Get-AdmPwdCredential -AccountName:MyAccount -ForestDnsName mydomain.com
```

Requests credentials with password for domain account MyAccount from domain mydomain.com

_Note_: In this case, ForestDnsName here is used as domain name where the account resides.
Command looks for account in specified domain. Domain must be domain from one of AD forests supported by PDS

## PARAMETERS

### -UserName
Name of the local account or managed domain account to return credential for

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ForestDnsName
DNS Name of AD forest where to find.  If not specified, AD forest where PDS is installed is used.
If you do not specify AD forest name, you are required to enter UserName in UPN format.  
Forest name passed here has to be one of the forests supported by PDS - see PDS configuration parameters for details on how supported forests are configred.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetAfter
Time when password reset shall be scheduled. When omitted, password reset is not scheduled.
Note that password is changed during next PDS management cycle after requested date/time (for managed domain accounts) or next GPO refresh (for local accounts).  
Format of the date/time accepted is the same as in active regional settings

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.DateTime
### System.String

## OUTPUTS
### System.Management.Automation.PSCredential

## NOTES
Caller needs to be delegated the permission to request password read (and also reset if specifies parameter ResetAfter). If not delegated, Access Denied error is returned

## RELATED LINKS
