---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdResetPasswordPermission

## SYNOPSIS
Delegates the permission to request reset of passwords of local admin account of computers in given AD container.

## SYNTAX

```powershell
Set-AdmPwdResetPasswordPermission [-Identity] <String> [-AllowedPrincipals] <String[]> [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Delegates the permission to request reset of passwords of local admin account of computers in given container

## EXAMPLES

### Example 1
```powershell
Set-AdmPwdResetPasswordPermission -Identity:MyComputers -AllowedPrincipals:MyDomain\AdmPwdPasswordResetters
```

Allows members of group MyDomain\AdmPwdPasswordResetters to request reset of local admin password of computers in container MyComputers

## PARAMETERS

### -Identity
Identification of container where to set the permission.
Permissions are then inherited to computers within this container and subcontainers.
  Identity can be either name or distinguishedName of the container

```yaml
Type: String
Parameter Sets: (All)
Aliases: OrgUnit

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AllowedPrincipals
List of security principals to be allowed to request reset of local admin passwords on computers under given container

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForestDnsName
DNS Name of AD forest where to find. If not specified, current forest is used.

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
### System.String
## OUTPUTS

### AdmPwd.Types.ObjectInfo
## NOTES
Caller needs to have permission to modify ACL on respective container.

## RELATED LINKS
