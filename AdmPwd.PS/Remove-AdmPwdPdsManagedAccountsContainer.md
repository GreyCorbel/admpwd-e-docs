---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Remove-AdmPwdPdsManagedAccountsContainer

## SYNOPSIS
Removes configuration of AD container with accounts with automatically managed passwords from configuration of PDS.

## SYNTAX

### Pds
```powershell
Remove-AdmPwdPdsManagedAccountsContainer [-Pds] <PdsEndpoint> [-DistinguishedName] <String> [<CommonParameters>]
```

### PdsName
```powershell
Remove-AdmPwdPdsManagedAccountsContainer [-PdsName] <String> [-DistinguishedName] <String> [<CommonParameters>]
```

## DESCRIPTION
PDS manages managed domain accounts in specified AD containers (typically OUs).  
Each container has specific configuration for passwords (complexity, age, encryption key, etc.).  
All user accounts in container are subject of automatic password configuration.  
Configuration of managed accounts containers is stored in PDS configuration file. This command removes matching entry from configuration.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Remove-AdmPwdPdsManagedAccountsContainer -DistinguishedName:"ou=AdmPwdManagedAccounts,dc=mydomain,dc=com"
```

Gets list of all PDS instances discovered and removes definition of container for managed accounts.

### Example 2
```powershell
Get-AdmPwdPds | ForEach-Object{Remove-AdmPwdPdsManagedAccountsContainer PdsName $_.Host -DistinguishedName "ou=AdmPwdManagedAccounts,dc=mydomain,dc=com"}
```

Gets list of all PDS instances discovered and removes definition of container for managed accounts.

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

### -DistinguishedName
DN of AD container that contains user accounts to be subject of password management by PDS.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
### AdmPwd.Types.PdsEndpoint
## OUTPUTS

## NOTES
Caller has to be member of PDS administrators role. If not member, Access Denied error is returned.

## RELATED LINKS
