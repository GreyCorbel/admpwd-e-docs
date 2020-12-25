# AdmPwd.PS Management Module
`Updated: 25 Dec 2020`  

## Description
Module provides full user and management capabilities for AdmPwd.E solution.  
User capabilities include:
- Reading of managed passwords (local admins and manageged domain accounts)
- Reset of managed passwords (planned in the future or immediate)
- Management of password history length for managed local admin accounts

Management capabilities include:
- AD Schema update
- Delegation model maintenance
- Generation of new encryption keys
- PDS management
- Environment statistics

## AdmPwd.PS Cmdlets
### [Add-AdmPwdPdsManagedAccountsContainer](Add-AdmPwdPdsManagedAccountsContainer.md)
Adds configuration of AD container with accounts with automatically managed passwords to configuration of PDS.

PDS manages managed domain accounts in specified AD containers (typically OUs).  
Each container has specific configuration for passwords (complexity, age, encryption key, etc.).  
All user accounts in container are subject of automatic password configuration.   
Configuration of managed accounts containers is stored in PDS configuration file.  

### [Add-AdmPwdPdsSidMapping](Add-AdmPwdPdsSidMapping.md)
Adds mapping of SIDs from untrusted forest to SID from PDS forest.

PDS supports management of untrusted forests.  
However, for management of untrusted forests, the following prerequisites must be configured:
- Explicit credentials for PDS to use when accessing intrusted forest
- Mapping of SID from untrusted forest to SIDs from PDS forests.

SID mappings are used for access control - User who wants to read or reset password must have his/her own SID (own SID or SID of group he/she is member of) 'paired' with SID that has been delegated the permission for password read/reset in untrusted forest.
SID mapping is used to establish this pairing of SIDs.

### [Add-AdmPwdPdsSupportedForest](Add-AdmPwdPdsSupportedForest.md)
Adds registration of supported AD forest for management to PDS configuration (optionally with connection credentials for the forest).

### [Get-AdmPwdADSchema](Get-AdmPwdADSchema.md)
Gets AD schema attributes for the solution and their schema GUIDs.

### [Get-AdmPwdCredential](Get-AdmPwdCredential.md)
Returns credential for local admin or managed domain account, and optionally schedules reset of retrieved password.

### [Get-AdmPwdEnvironmentStatus](Get-AdmPwdEnvironmentStatus.md)
Returns staus information about environment managed by the solution.

### [Get-AdmPwdKeySize](Get-AdmPwdKeySize.md)
Returns supported key sizes for solution

### [Get-AdmPwdManagedAccountPassword](Get-AdmPwdManagedAccountPassword.md)
Retrieves password for given managed domain user account.

### [Get-AdmPwdPassword](Get-AdmPwdPassword.md)
Finds admin password for given computer.

### [Get-AdmPwdPds](Get-AdmPwdPds.md)
Lists all discovered PDS instances along with their parameters.

### [Get-AdmPwdPdsAccessControlParameters](Get-AdmPwdPdsAccessControlParameters.md)
Returns parameters of PDS service related to access check process.

### [Get-AdmPwdPdsAdminRole](Get-AdmPwdPdsAdminRole.md)
Returns name of AD group that has role of PDS Administrator.

### [Get-AdmPwdPdsDnsParameters](Get-AdmPwdPdsDnsParameters.md)
Returns parameters of PDS service related to registration of PDS autodiscovery SRV record.

### [Get-AdmPwdPdsLicenseParameters](Get-AdmPwdPdsLicenseParameters.md)
Returns parameters of PDS service related to license of product.

### [Get-AdmPwdPdsManagedAccountsContainer](Get-AdmPwdPdsManagedAccountsContainer.md)
Gets all defined managed accounts containers from configuration of PDS.

PDS manages managed domain accounts in specified AD containers (typically OUs).  
Each container has specific configuration for passwords (complexity, age, encryption key, etc.).  
All user accounts in container are subject of automatic password configuration.  
Configuration of managed accounts containers is stored in PDS configuration file.  

### [Get-AdmPwdPdsManagedAccountsParameters](Get-AdmPwdPdsManagedAccountsParameters.md)
Returns parameters of PDS service related to management of Managed Domain Accounts.

### [Get-AdmPwdPdsSidMapping](Get-AdmPwdPdsSidMapping.md)
Gets mapping of SIDs from untrusted forest to SID from PDS forest from PDS instance.

### [Get-AdmPwdPdsSupportedForest](Get-AdmPwdPdsSupportedForest.md)
Lists supported AD forests from PDS configuration.

### [Get-AdmPwdPublicKey](Get-AdmPwdPublicKey.md)
Gets public key with given ID.

### [Get-AdmPwdPublicKeys](Get-AdmPwdPublicKeys.md)
Returns all public keys managed by PDS instance.

### [Get-AdmPwdUserPermissions](Get-AdmPwdUserPermissions.md)
Finds permissions that specified user has on specified AD object (computer or user account).

### [Move-AdmPwdPdsAdminRole](Move-AdmPwdPdsAdminRole.md)
Sets a group as PDS Admins role group.  
Members of this role have permission to manage configuration of PDS.

### [New-AdmPwdKeyPair](New-AdmPwdKeyPair.md)
Generates new key pair in Password Decryption Service.

### [Remove-AdmPwdPdsManagedAccountsContainer](Remove-AdmPwdPdsManagedAccountsContainer.md)
Removes configuration of AD container with accounts with automatically managed passwords from configuration of PDS.

PDS manages managed domain accounts in specified AD containers (typically OUs).  
Each container has specific configuration for passwords (complexity, age, encryption key, etc.).  
All user accounts in container are subject of automatic password configuration.  
Configuration of managed accounts containers is stored in PDS configuration file.  

### [Remove-AdmPwdPdsSidMapping](Remove-AdmPwdPdsSidMapping.md)
Removes mapping of SIDs from untrusted forest to SID from PDS forest.

### [Remove-AdmPwdPdsSupportedForest](Remove-AdmPwdPdsSupportedForest.md)
Removes registration of supported AD forest for management from PDS configuration.

### [Reset-AdmPwdManagedAccountPassword](Reset-AdmPwdManagedAccountPassword.md)
Requests reset of password for given managed domain account. 
Password is reset by PDS upon next cycle od password management (within 10 minutes by default)

### [Reset-AdmPwdPassword](Reset-AdmPwdPassword.md)
Requests reset of local admin password for given computer (either immediate or planned for future).

### [Set-AdmPwdComputerSelfPermission](Set-AdmPwdComputerSelfPermission.md)
Gives computers permission to report passwords of their local admin accounts to AD.

### [Set-AdmPwdPdsAccessControlParameters](Set-AdmPwdPdsAccessControlParameters.md)
Sets parameters of PDS service related to access control decisions for password reads and resets.

### [Set-AdmPwdPdsDeletedObjectsPermission](Set-AdmPwdPdsDeletedObjectsPermission.md)
Delegates necessary permissions to Password Decryption Service accounts on Deleted Objects container in specified domain.

### [Set-AdmPwdPdsDnsParameters](Set-AdmPwdPdsDnsParameters.md)
Sets parameters of PDS service related to registration of PDS autodiscovery SRV record.

### [Set-AdmPwdPdsLicenseParameters](Set-AdmPwdPdsLicenseParameters.md)
Sets parameters of PDS service related to access control decisions for password reads and resets.

### [Set-AdmPwdPdsManagedAccountsContainer](Set-AdmPwdPdsManagedAccountsContainer.md)
Updates PDS configuration of AD container with accounts with automatically managed passwords.

PDS manages managed domain accounts in specified AD containers (typically OUs).  
Each container has specific configuration for passwords (complexity, age, encryption key, etc.).  
All user accounts in container are subject of automatic password configuration.  
Configuration of managed accounts containers is stored in PDS configuration file.  

### [Set-AdmPwdPdsManagedAccountsParameters](Set-AdmPwdPdsManagedAccountsParameters.md)
Sets parameters of PDS service related to management of Managed Domain Accounts.

### [Set-AdmPwdPdsManagedAccountsPermission](Set-AdmPwdPdsManagedAccountsPermission.md)
Delegates necessary permissions to Password Decryptor Service (PDS) service accounts, so as it is able to manage and retrieve password of managed domain user accounts.

### [Set-AdmPwdPdsPermission](Set-AdmPwdPdsPermission.md)
Delegates necessary permissions to Password Decryptor service accounts.

### [Set-AdmPwdPdsSidMapping](Set-AdmPwdPdsSidMapping.md)
Updates mapping of SIDs from untrusted forest to SID from PDS forest.

### [Set-AdmPwdPdsSupportedForest](Set-AdmPwdPdsSupportedForest.md)
Updates registration of supported AD forest for management in PDS configuration (optionally with connection credentials for the forest).

### [Set-AdmPwdReadPasswordPermission](Set-AdmPwdReadPasswordPermission.md)
Delegates the permission to read passwords of local admin account of computers in given AD container.

### [Set-AdmPwdResetPasswordPermission](Set-AdmPwdResetPasswordPermission.md)
Delegates the permission to request reset of passwords of local admin account of computers in given AD container.

### [Update-AdmPwdADSchema](Update-AdmPwdADSchema.md)
Prepares AD schema for the solution in local forest. Must be executed in every AD forest that is supposed to host computers of domain user accounts that have password managed by AdmPwd.E solution.

### [Update-AdmPwdPasswordHistory](Update-AdmPwdPasswordHistory.md)
Maintains records in password history for given computer account in AD.

