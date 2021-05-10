-- Adds Table Structure and API login User.
BEGIN

create schema carnai;
revoke create on SCHEMA public from PUBLIC;

-- Conditionally Create User if it dne.
 IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles  -- SELECT list can be empty for this
      WHERE  rolname = 'api') THEN
      CREATE ROLE api LOGIN PASSWORD 'carna'; -- This would be changed with an import in production.
   END IF;

create database carna_ai;
-- User information for name, id, and admin status.
create table if not exists Users (
    u_id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    isAdmin BOOLEAN default false
);

-- Each Course has an owner
create table if not exists Courses (
    course_id SERIAL PRIMARY KEY,
    creator_id INT REFERENCES carnai.users(u_id),
    name VARCHAR(64) NOT NULL,

-- Each Course has questions, Answers, type of question
create table if not exists Questions (
    question_id SERIAL PRIMARY KEY,
    course_id INT REFERENCES carnai.users(course_id)
    content VARCHAR(64) NOT NULL,
    type NOT NULL,
    isOpenEnded default false,
    -- Optional portions of a question
    answer INT,

-- Possible changes: Create an Answer Table.

-- DB Management 
-- Sets up the (API) account here. 
GRANT ALL PRIVILEGES ON SCHEMA carnai TO api;
-- Give CRUD operations to an API User.
GRANT USAGE ON SCHEMA carnai TO api;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA carnai TO api;

COMMIT;
END;