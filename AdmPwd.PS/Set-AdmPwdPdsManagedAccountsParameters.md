---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdPdsManagedAccountsParameters

## SYNOPSIS
Sets parameters of PDS service related to management of Managed Domain Accounts.

## SYNTAX

### Pds
```powershell
Set-AdmPwdPdsManagedAccountsParameters [-Pds] <PdsEndpoint> [-ManagementInterval] <UInt32> [<CommonParameters>]
```

### PdsName
```powershell
Set-AdmPwdPdsManagedAccountsParameters [-PdsName] <String> [-ManagementInterval] <UInt32> [<CommonParameters>]
```

## DESCRIPTION
PDS has ability to automatically maintain password of domain user accounts. This is particularly suitable for management of secondary accounts used for administration - users can easily retrieve and reset password "on the fly" without the need to maiontain the password manually, store the password in personal vault, etc.

This allows to limit leakage of password of sensitive accounts outside of company.
## EXAMPLES

### Example 1
```powershell
Set-AdmPwdPdsManagedAccountsParameters -ManagementInterval 1200
```

Sets management interval for Managed Domain Accounts to 20 minutes.

Default: 10 minutes

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

### -ManagementInterval
How often (in seconds) PDS detects expired password on managed domain accounts across all managed accounts containers.

```yaml
Type: UInt32
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

### AdmPwd.Types.PdsEndpoint
### System.String
### System.Int32
## OUTPUTS

## NOTES

## RELATED LINKS
