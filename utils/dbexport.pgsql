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
    achievement character varying,
    poster text,
    video character varying(500)
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
-- Name: staffs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.staffs (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    staffname character varying(255),
    staffemail character varying(255),
    staffgithub character varying(255),
    staffwebsite character varying(255),
    stafflinkedin character varying(255),
    stafftitle character varying(255)
);


ALTER TABLE public.staffs OWNER TO postgres;

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

COPY public.projects (id, teamname, teammember1, teammember2, teamadvisor, achievement, poster, video) FROM stdin;
230	Test Team	e0000005	e0000006	Test Team Advisor 	gemini	\N	\N
231	Test Team	e0000007	e0000008	Test Team Advisor 	vostok	\N	\N
232	Test Team	e0000001	e0000002	Test Team Advisor 	artemis	\N	\N
233	Test Team	e0000017	e0000004	Test Team Advisor 	apollo11	\N	https://youtube.com
\.


--
-- Data for Name: staffs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.staffs (id, staffname, staffemail, staffgithub, staffwebsite, stafflinkedin, stafftitle) FROM stdin;
c7ac0255-51e1-4bad-84c4-0f3dd0d69fff	Jun Kang	angjunkang@u.nus.edu	https://github.com/Irminrics	http://irminrics.herokuapp.com	https://www.linkedin.com/in/angjunkang/	Temp
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstname, lastname, studentnumber, userid, email, contactnumber, programme, password, otp) FROM stdin;
0cb0526d-fad1-45cd-9804-0656585d35f6	Jun Kang	Ang	admin	e0000000	orbital@u.nus.edu	91234567	Bachelor of Computing	$2b$10$7/HrZ1juL9NuQlKkOx1.vunc8HmLYbvWVFZtIZOjj0KyRShGVOpRm	\N
6704c352-24ab-48a9-91a3-1b3c0719aac8	Brandon	Tay	A0000003H	e0000003	brandontan@u.nus.edu	90000002	Bachelor of Computing		\N
1c4e68b7-a040-4835-911d-9b410cbef99a	Zhen Yong	Lim	A0000004H	e0000004	limzhenyong@u.nus.edu	90000003	Bachelor of Science		\N
74c23660-7687-47d8-867d-a06ab1ec1250	Darryl	Ee	A0000005H	e0000005	darrylee@u.nus.edu	90000004	Bachelor of Computing		\N
3fff771e-67db-4d4f-9aef-4841e6fb90c2	Jason	Lee	A0000006H	e0000006	jasonlee@u.nus.edu	90000005	Bachelor of Science		\N
c1b3766b-7600-4334-8767-2d9a90f36202	Feiyang	Shang 	A0000007H	e0000007	shangfeiyang@u.nus.edu	90000006	Bachelor of Computing		\N
48a22447-998f-41e6-b593-b97e6efd4647	Jia Wei	Ho 	A0000008H	e0000008	hojiawei@u.nus.edu	90000007	Bachelor of Computing		\N
7e304ac5-8edd-40b8-84df-196dcae4bc42	Qi En	Wong	A0000009H	e0000009	wongqien@u.nus.edu	90000008	Bachelor of Computing		\N
43900b88-c074-427d-bca3-042e6cbb481b	Yongxin	Wu 	A0000010H	e0000010	wuyongxin@u.nus.edu	90000009	Bachelor of Computing		\N
ffdab0ed-678b-42e4-82aa-79456e98698f	Joshua	Chan	A0000011H	e0000011	joshuachan@u.nus.edu	90000010	Bachelor of Science		\N
70a2da66-e526-4386-a4b9-237ba0ef7deb	 Jia Wei	Hor	A0000012H	e0000012	horjiawei@u.nus.edu	90000011	Bachelor of Computing		\N
27f1ac26-6f58-4c1d-a7de-cf22bc157c49	Xiaoying	Yan	A0000013H	e0000013	yanxiaoying@u.nus.edu	90000012	Bachelor of Computing		\N
87eeaa69-e196-406b-8c58-bbb433552c08	Donovan	Singh	A0000014H	e0000014	donovansingh@u.nus.edu	90000013	Bachelor of Computing		\N
dbc98ddf-c006-4c6d-9aeb-17edf55cfc78	Brandon	Lau	A0000015H	e0000015	brandonlau@u.nus.edu	90000014	Bachelor of Computing		\N
cba03e27-44f1-4a48-8dda-5dcf218000e3	Kai Wen	Ng 	A0000016H	e0000016	ngkaiwen@u.nus.edu	90000015	Bachelor of Science		\N
f3c59476-27c1-45e6-b8ef-9ca55f8c00a5	Jason	Tan	A0000002H	e0000002	jasontan@u.nus.edu	90000001	Bachelor of Science		\N
3cca20a1-deb2-4dcb-8c3b-1547691e09e6	Jing En	Wong	A0000001H	e0000001	wongjinen@u.nus.edu	90000000	Bachelor of Computing		\N
b9d94bb1-5ec9-44d4-8514-e0886956d908	Jun Kang	Ang	A0000017H	e0000017	angjunkang@u.nus.edu	90000016	Bachelor of Computing	$2b$10$yXVh23Bpo60VQz1CYqY0DeeuKJbW8qqDgq3xEPSRP9k66eNBcKE/6	
\.


--
-- Name: projects_project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_project_id_seq', 233, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: staffs staffs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.staffs
    ADD CONSTRAINT staffs_pkey PRIMARY KEY (id);


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

