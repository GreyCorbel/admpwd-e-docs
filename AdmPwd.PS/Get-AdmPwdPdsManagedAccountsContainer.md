---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPdsManagedAccountsContainer

## SYNOPSIS
Gets all defined managed accounts containers from configuration of PDS.

## SYNTAX

### Pds
```powershell
Get-AdmPwdPdsManagedAccountsContainer [-Pds] <PdsEndpoint> [<CommonParameters>]
```

### PdsName
```powershell
Get-AdmPwdPdsManagedAccountsContainer [-PdsName] <String> [<CommonParameters>]
```

## DESCRIPTION
PDS manages managed domain accounts in specified AD containers (typically OUs).  
Each container has specific configuration for passwords (complexity, age, encryption key, etc.).  
All user accounts in container are subject of automatic password configuration.  
Configuration of managed accounts containers is stored in PDS configuration file.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Foreach-Object{ Write-host "PDS: $($_.Host)"; Get-AdmPwdPdsManagedAccountsContainer -PdsName $_.Host}
```

Gets list of all PDS instances discovered and for each of them returns definition of container for managed accounts.

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

### System.String
### AdmPwd.Types.PdsEndpoint
## OUTPUTS

### AdmPwd.Types.ManagedAccountsContainer[]
List on OUs that are configured on PDS as managed accounts containers.

## NOTES
Caller has to be member of PDS administrators role. If not member, Access Denied error is returned.

## RELATED LINKS
