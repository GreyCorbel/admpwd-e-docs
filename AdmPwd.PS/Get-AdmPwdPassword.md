---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPassword

## SYNOPSIS
Finds admin password for given computer.

## SYNTAX

```powershell
Get-AdmPwdPassword [-ComputerName] <String> [-IncludeHistory] [[-ForestDnsName] <String>] [-IsDeleted] [<CommonParameters>]
```

## DESCRIPTION
Finds local admin password and password expiration timestamp for given computer.
Optionally returns password history, if target computer is configured to maintain password history

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPassword -ComputerName:MyComputer -IncludeHistory
```

Gets password of local administrator on computer MyComputer, including password history

## PARAMETERS

### -ComputerName
Name of the computer to get admin password for

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

### -IncludeHistory
Whether to include password history into returned data

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDeleted
Whether or not to look for deleted computer object

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String[]
### System.Boolean
### System.String
## OUTPUTS

### AdmPwd.Types.PasswordInfo
## NOTES
Caller needs to be delegated the permission to read local admin password for given computer. If this permissiosn is not granted, Access Denied error is returned.  

With switch IsDeleted, if multiple deleted computers with the same name is found, password for most recently deleted machine is returned

## RELATED LINKS
