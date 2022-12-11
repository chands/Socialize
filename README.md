# (Socialize) Social Media Sample Project

## Database setup

```shell
mysql -u root -p
```

```mysql
create database socializedb;

create user SocializeAdmin identified with mysql_native_password by 'wrong_password';

grant all privileges on socializedb.* to SocializeAdmin;

flush privileges;

use socializedb;
```

## Project Structure

```shell
./src
├───controllers       # functions to connect routes to db operations
├───db                # db connection and model definitions
├───public            # html/css/js files for static part of the site
└───routes            # express middlewares (route wise)
```
