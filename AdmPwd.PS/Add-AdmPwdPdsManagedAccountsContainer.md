---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Add-AdmPwdPdsManagedAccountsContainer

## SYNOPSIS
Adds configuration of AD container with user accounts with automatically managed passwords to configuration of PDS.

## SYNTAX

### Pds
```powershellAdd-AdmPwdPdsManagedAccountsContainer [-Pds] <PdsEndpoint> [-DistinguishedName] <String>
 [[-PasswordAge] <UInt32>] [[-PasswordLength] <UInt32>] [[-PasswordHistoryLength] <UInt32>]
 [[-PasswordComplexity] <PasswordComplexity>] [[-KeyId] <UInt32>] [<CommonParameters>]
```

### PdsName
```powershellAdd-AdmPwdPdsManagedAccountsContainer [-PdsName] <String> [-DistinguishedName] <String>
 [[-PasswordAge] <UInt32>] [[-PasswordLength] <UInt32>] [[-PasswordHistoryLength] <UInt32>]
 [[-PasswordComplexity] <PasswordComplexity>] [[-KeyId] <UInt32>] [<CommonParameters>]
```

## DESCRIPTION
PDS can manage (regularly rotate and reset on demand) password of domain user accounts in specified AD containers (typically OUs).  
Each AD container can have specific configuration for passwords (complexity, age, encryption key, etc.).  
All user accounts in AD container are subject of automatic password management.  
Configuration of managed accounts containers is stored in PDS configuration file. Configuration in PDS config file is managed by this command.

Passwords are encrypted by encryption key with given KeyID. If no KeyID provided, passwords are automatically encrypted by most recent encryption key available on PDS at a time of password encryption.
This provides easy to use encryption key rollover.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPds | Add-AdmPwdPdsManagedAccountsContainer -DistinguishedName:"ou=AdmPwdManagedAccounts,dc=mydomain,dc=com" -PasswordAge:14400
```

Gets list of all PDS instances discovered and adds definition of new container for managed accounts.
Password will be changed every 10 days.

### Example 2
```powershell
Get-AdmPwdPds | ForEach-Object{Add-AdmPwdPdsManagedAccountsContainer PdsName $_.Host -DistinguishedName "ou=AdmPwdManagedAccounts,dc=mydomain,dc=com" -KeyId:1}
```

Gets list of all PDS instances discovered and adds definition of new container for managed accounts.  
Password will be encrypted by key with ID=1.

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

### -PasswordAge
Maximum allowed time (in minutes) for password being valid on managed accounts in this AD container.
After this time expires, PDS automatically changes the password.

Default: 43200 (30 days)

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: 43200
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordLength
Length of passwords assigned by PDS service, in chars.

Default: 12 chars

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: 12
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordHistoryLength
How many passwords to keep in history.
Only applies when Password History is enabled for container.

Default: 1

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: 1
Accept pipeline input: False
Accept wildcard characters: False
```

### -PasswordComplexity
How many passwords to keep in history.
Only applies when Password History is enabled for container.

Default: PasswordComplexity.LargeSmallNumSpec

```yaml
Type: PasswordComplexity
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: PasswordComplexity.LargeSmallNumSpec
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeyId
ID of key that will be used to protect the passwords of managed accounts.

Default: null (which means that PDS will automatically use latest encryption key)

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: $null
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS
### AdmPwd.Types.PdsEndpoint
### System.UInt32
### System.String
## OUTPUTS

## NOTES
Caller has to be member of PDS administrators role. If not a member, Access Denied error is returned.

## RELATED LINKS
