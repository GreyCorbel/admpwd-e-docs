---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPdsManagedAccountsParameters

## SYNOPSIS
Returns parameters of PDS service related to management of Managed Domain Accounts.

## SYNTAX

### Pds
```powershell
Get-AdmPwdPdsManagedAccountsParameters [-Pds] <PdsEndpoint> [<CommonParameters>]
```

### PdsName
```powershell
Get-AdmPwdPdsManagedAccountsParameters [-PdsName] <String> [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Get-AdmPwdPdsManagedAccountsParameters
```

Gets common parameters related to management of Managed Domain Accounts

## PARAMETERS

### -Pds
Instance of PDS as returned by Get-AdmPwdPds command

```yaml
Type: PdsEndpoint
Parameter Sets: Pds
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PdsName
Name of instance of PDS  - DNS name of machine hosting PDS service

```yaml
Type: String
Parameter Sets: PdsName
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### AdmPwd.Types.PdsEndpoint
### System.String
## OUTPUTS

### AdmPwd.Types.ManagedAccountsParameters
Object representing parameters of Managed Domain acocunts management process.

## NOTES

## RELATED LINKS
