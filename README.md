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

```shell
git init
git add .
# setup user email and name for author if not already
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

git commit -sm "commit message"
```