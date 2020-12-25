---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Reset-AdmPwdManagedAccountPassword

## SYNOPSIS
Requests reset of password for given managed domain account.

## SYNTAX

```powershell
Reset-AdmPwdManagedAccountPassword [-AccountName] <String> [[-WhenEffective] <DateTime>] [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Requests reset of password for given managed domain account.  
Password refresh request can be either immediate (occurs during next management cycle of PDS - every 10 minutes by default) or planned for specific time (occurs on next PDS management cycle after planned time)

## EXAMPLES

### Example 1
```powershell
Reset-AdmPwdManagedAccountPassword -AccountName:MyAccount -WhenEffective:"1.9.2017 15:00"
```

Requests change of managed domain account computer MyAccount during next management cycle after 1.9.2017 15:00

## PARAMETERS

### -AccountName
Name of the managed domain account to reset password for

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
DNS Name of AD forest where to find. If not specified, forest where PDS is installed is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhenEffective
Time when password shall be changed.
When omitted, password change is requested immediately.  
Note that password is changed during next PDS management cycle (within 5 minutes by default) after requested date/time on computer password reset is requested for.  
Format of the date/time accepted is the same as in active regional settings

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String[]
### System.DateTime
### System.String
## OUTPUTS

### AdmPwd.Types.PasswordResetStatus
## NOTES
Caller needs to be delegated the permission to request password reset.
In not delegated, Access Denied error is returned

## RELATED LINKS
