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

### `Backend (Server Side Code)`

```shell
./src
├───controllers       # functions to connect routes to db operations
├───db                # db connection and model definitions
├───public            # html/css/js files for static part of the site
├───routes            # express middlewares (route wise)
└───utils             # Generate Random username

```

### `Frontend (Client Side Code)`

```shell
src/public
├───app              # our own common frontend js and CSS code 
├───components       # our own html snippets
├───css              # CSS library used
├───js               # JavaScript libraries used
└───index.html       # First / Home page
```

## Business logic

### Users

1. **create users**
   this will create a new user with a random username

### Posts

1. **create posts**
   this will create a new post, required fields are

    - username (the author of that post)
    - title (the title of the post)
    - body

2. **show all posts**
   list all existing posts, we should have following filtering support

    - filter by username
    - filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD`

### Comments

1. **add a comment**

2. **show all comments (under a post)**

3. **show all comments (of a user)**

**NOTE: Access database through controllers not routes & controllers through routes!**

## API Documentation

### `users`

1. `POST /users`
-- Creates a new user with random username and user id

2. `GET /users/{userid}`
-- Get a user with a given user id
3. `GET /users/{username}`
-- Get a user with a given username

### `Posts`

1. `GET /posts`
-- Get all posts by everyone

2. `POST /posts`
-- Create a new post.
required fields in body are:
```
userId=
title=
body=
```


```shell
git init
git add .
# setup user email and name for author if not already
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

git commit -sm "commit message"
```
