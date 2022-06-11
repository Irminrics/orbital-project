--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    teamname character varying(255),
    teammember1 character varying(255),
    teammember2 character varying(255),
    teamadvisor character varying(255),
    achievement character varying
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_project_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_project_id_seq OWNER TO postgres;

--
-- Name: projects_project_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_project_id_seq OWNED BY public.projects.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    firstname character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    studentnumber character varying(255) NOT NULL,
    userid character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    contactnumber character varying(255) NOT NULL,
    programme character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    otp character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_project_id_seq'::regclass);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, teamname, teammember1, teammember2, teamadvisor, achievement) FROM stdin;
145	Test Team	Test Team Member 1	Test Team Member 2	Test Team Advisor 	artemis
146	Test Team	Test Team Member 1	Test Team Member 2	Test Team Advisor 	apollo11
147	Test Team	Test Team Member 1	Test Team Member 2	Test Team Advisor 	gemini
148	Test Team	Test Team Member 1	Test Team Member 2	Test Team Advisor 	vostok
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstname, lastname, studentnumber, userid, email, contactnumber, programme, password, otp) FROM stdin;
0cb0526d-fad1-45cd-9804-0656585d35f6	Jun Kang	Ang	admin	e0000000	orbital@u.nus.edu	91234567	Bachelor of Computing	$2b$10$7/HrZ1juL9NuQlKkOx1.vunc8HmLYbvWVFZtIZOjj0KyRShGVOpRm	\N
d47a57e0-17be-4fc2-8563-9c90731e98cf	Zhen Yong	Lim	A0000004H	e0000004	limzhenyong@u.nus.edu	90000003	Bachelor of Science		\N
5e4675f2-4412-4783-9c98-b43ade0763c0	Darryl	Ee	A0000005H	e0000005	darrylee@u.nus.edu	90000004	Bachelor of Computing		\N
d8bb91fc-9864-40a2-a87c-8ebed7050a39	Feiyang	Shang 	A0000007H	e0000007	shangfeiyang@u.nus.edu	90000006	Bachelor of Computing		\N
bb5288a9-3c40-4b80-b971-82bf4eeb58d0	Jia Wei	Ho 	A0000008H	e0000008	hojiawei@u.nus.edu	90000007	Bachelor of Computing		\N
ff19c0b7-f9fc-4520-aa92-771135669d2e	Qi En	Wong	A0000009H	e0000009	wongqien@u.nus.edu	90000008	Bachelor of Computing		\N
10a3f58b-2b7d-4745-8db9-d3cb5c91267c	Yongxin	Wu 	A0000010H	e0000010	wuyongxin@u.nus.edu	90000009	Bachelor of Computing		\N
5fef5912-938f-4822-80ac-8d5c18ffa838	Joshua	Chan	A0000011H	e0000011	joshuachan@u.nus.edu	90000010	Bachelor of Science		\N
86fd2e5f-d30e-4f40-82e7-362847891401	Jason	Tan	A0000002H	e0000002	jasontan@u.nus.edu	90000001	Bachelor of Science		\N
ba670269-5667-41aa-a4a9-05cfc4e11fa7	Brandon	Tay	A0000003H	e0000003	brandontan@u.nus.edu	90000002	Bachelor of Computing		\N
5c472583-4756-4264-a98f-5a48cb013adb	Jing En	Wong	A0000001H	e0000001	wongjinen@u.nus.edu	90000000	Bachelor of Computing		\N
709600fc-a86e-49fb-bcf7-2f35c0881235	 Jia Wei	Hor	A0000012H	e0000012	horjiawei@u.nus.edu	90000011	Bachelor of Computing		\N
49dc0679-3114-4770-a284-10cbff4a8bd5	Xiaoying	Yan	A0000013H	e0000013	yanxiaoying@u.nus.edu	90000012	Bachelor of Computing		\N
85086930-dd79-4508-a004-1facd5a42800	Donovan	Singh	A0000014H	e0000014	donovansingh@u.nus.edu	90000013	Bachelor of Computing		\N
0011e5bd-685e-45dc-9645-acf0a61c0131	Brandon	Lau	A0000015H	e0000015	brandonlau@u.nus.edu	90000014	Bachelor of Computing		\N
5ab6ae1b-b1df-4aa9-92f8-e535bc8cbc94	Kai Wen	Ng 	A0000016H	e0000016	ngkaiwen@u.nus.edu	90000015	Bachelor of Science		\N
\.


--
-- Name: projects_project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_project_id_seq', 148, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: users userid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT userid_unique UNIQUE (userid);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

