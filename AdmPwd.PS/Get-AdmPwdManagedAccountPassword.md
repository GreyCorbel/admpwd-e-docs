---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdManagedAccountPassword

## SYNOPSIS
Retrieves password for given managed domain user account.

## SYNTAX
```powershell
Get-AdmPwdManagedAccountPassword [-AccountName] <String> [-IncludeHistory] [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves password and password expiration timestamp for given managed domain user account.
Optionally returns password history, if target account is configured to maintain password history.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdManagedAccountPassword -AccountName:MyManagedAccount -IncludeHistory
```

Gets password of managed domain user account MyManagedAccount, including password history

## PARAMETERS

### -AccountName
Name of the managed domain user account to get password for

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String[]
### System.Boolean
### System.String
## OUTPUTS

### AdmPwd.Types.PasswordInfo
### AdmPwd.Types.SecurePasswordInfo
## NOTES
Caller needs to be delegated the permission to read password for given managed domain user account. If this permission is not granted, Access Denied error is returned

## RELATED LINKS
