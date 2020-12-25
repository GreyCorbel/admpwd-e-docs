---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Reset-AdmPwdPassword

## SYNOPSIS
Requests reset of local admin password for given computer.

## SYNTAX

```powershell
Reset-AdmPwdPassword [-ComputerName] <String> [[-WhenEffective] <DateTime>] [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Requests reset of local admin password for given computer.

Password refresh request can be either immediate (occurs during next GPO refresh) or planned for specific time (occurs on next GPO refresh after planned time)

## EXAMPLES

### Example 1
```powershell
Reset-AdmPwdPassword -ComputerName:MyComputer -WhenEffective:"1.3.2014 15:00"
```

Requests change of local admin account on computer MyComputer during next GPO refresh after 1.3.2014 15:00

## PARAMETERS

### -ComputerName
Name of the computer to reset password for

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
DNS Name of AD forest where to find.
If not specified, forest where PDS is installed is used.

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

Note that password is changed during next GPO refresh after requested date/time on computer password reset is requested for.  
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
Caller needs to be delegated the permission to request password reset. In not delegated, Access Denied error is returned

## RELATED LINKS
