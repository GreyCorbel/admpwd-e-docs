---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdPdsLicenseParameters

## SYNOPSIS
Changes the location of PDS license file.

## SYNTAX

### Pds
```powershell
Set-AdmPwdPdsLicenseParameters [-Pds] <PdsEndpoint> [[-LicenseFilePath] <String>] [<CommonParameters>]
```

### PdsName
```
Set-AdmPwdPdsLicenseParameters [-PdsName] <String> [[-LicenseFilePath] <String>] [<CommonParameters>]
```

## DESCRIPTION
By default, license file name is license.xml and is located in PDS install folder. This command allows to change the location and name of license file, e.g. for storage in file server share.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Set-AdmPwdPdsLicenseParameters -LicenseFilePath .\license.xml
```

Instructs PDS to use license file license.xml located in install folder of PDS service.

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

### -LicenseFilePath
Path to license file.
If relative path used, then it has to be relative to install folder of PDS service.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### AdmPwd.Types.PdsEndpoint
### System.String
### System.Boolean
## OUTPUTS

## NOTES
Caller must hold PDS Admin role for the call to succeed.

## RELATED LINKS
