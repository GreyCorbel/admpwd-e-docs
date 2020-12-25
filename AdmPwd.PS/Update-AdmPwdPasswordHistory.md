---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Update-AdmPwdPasswordHistory

## SYNOPSIS
Maintains records in password history for given computer.

## SYNTAX

### PasswordCount
```powershell
Update-AdmPwdPasswordHistory [-ComputerName] <String> [-KeepLast] <UInt32> [[-ForestDnsName] <String>] [<CommonParameters>]
```

### PasswordAge
```powershell
Update-AdmPwdPasswordHistory [-ComputerName] <String> [-KeepNewerThan] <DateTime> [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Computers only add to password history.  
Maintenance (shortening) of password history is responsibility of domain administrator.  

This cmdlet enables to keep last xxx records in password history, or only passwords newer than given datetime, while other password history records are removed.

## EXAMPLES

### Example 1
```powershell
Update-AdmPwdPasswordHistory -ComputerName:MyComputer -KeepLast:10
```

On MyComputer machine, keeps up to 10 most recent passwords in password history, deleting the others

### Example 2
```powershell
Update-AdmPwdPasswordHistory -ComputerName:MyComputer -KeepNewerThan:"1.1.2014"
```

On MyComputer machine, keeps only passwords that were valid after 1.1.2014 in password history, deleting the others

## PARAMETERS

### -ComputerName
Name of the computer to maintain password history on

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

### -KeepLast
How many passwords to keep in history

```yaml
Type: UInt32
Parameter Sets: PasswordCount
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepNewerThan
Keep only passwords newer than given date in history

```yaml
Type: DateTime
Parameter Sets: PasswordAge
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForestDnsName
DNS Name of AD forest where to find.
If not specified, current forest is used.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
### System.UInt32
### System.DateTime
### System.String
## OUTPUTS

### AdmPwd.Types.PasswordCleanupStatus
## NOTES
Caller needs to have permission to read and write password history attribute on computer account in AD.

## RELATED LINKS
