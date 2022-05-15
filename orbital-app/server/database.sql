CREATE DATABASE orbital;

CREATE TABLE projects(
    project_id SERIAL PRIMARY KEY,
    teamName VARCHAR(255),
    teamMember1 VARCHAR(255),
    teamMember2 VARCHAR(255),
    teamAdvisor VARCHAR(255)
);

TRUNCATE TABLE someTable RESTART IDENTITY;