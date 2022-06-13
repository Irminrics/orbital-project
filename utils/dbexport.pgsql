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
199	Test Team	e0000005	e0000006	Test Team Advisor 	gemini
200	Test Team	e0000007	e0000008	Test Team Advisor 	vostok
198	Test Team	e0000003	e0000004	Test Team Advisor 	apollo11
197	Test Team	e0000001	e0000002	Test Team Advisor 	artemis
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstname, lastname, studentnumber, userid, email, contactnumber, programme, password, otp) FROM stdin;
82811d3d-2d3f-4222-91ee-afcece13ddec	Brandon	Tay	A0000003H	e0000003	brandontan@u.nus.edu	90000002	Bachelor of Computing		\N
0cb0526d-fad1-45cd-9804-0656585d35f6	Jun Kang	Ang	admin	e0000000	orbital@u.nus.edu	91234567	Bachelor of Computing	$2b$10$7/HrZ1juL9NuQlKkOx1.vunc8HmLYbvWVFZtIZOjj0KyRShGVOpRm	\N
08af9ef0-3897-4872-9fc0-7237eb8191c6	Zhen Yong	Lim	A0000004H	e0000004	limzhenyong@u.nus.edu	90000003	Bachelor of Science		\N
1e34e619-fbc1-4b08-ab2f-326fbd8cdc7a	Darryl	Ee	A0000005H	e0000005	darrylee@u.nus.edu	90000004	Bachelor of Computing		\N
04d0aded-db1c-4ea2-aad7-eae20cd0e94b	Feiyang	Shang 	A0000007H	e0000007	shangfeiyang@u.nus.edu	90000006	Bachelor of Computing		\N
a12dc774-37a8-40b6-86be-f1508bfab983	Jia Wei	Ho 	A0000008H	e0000008	hojiawei@u.nus.edu	90000007	Bachelor of Computing		\N
422e703c-340f-47cc-99eb-bef667d1996c	Qi En	Wong	A0000009H	e0000009	wongqien@u.nus.edu	90000008	Bachelor of Computing		\N
2664bda4-a884-471a-bc65-fcce5a0e6fe8	Yongxin	Wu 	A0000010H	e0000010	wuyongxin@u.nus.edu	90000009	Bachelor of Computing		\N
3cfd40b5-465d-4373-849e-31cc48073c7d	Joshua	Chan	A0000011H	e0000011	joshuachan@u.nus.edu	90000010	Bachelor of Science		\N
0657b77b-e0f2-429b-b816-70973bd32f89	 Jia Wei	Hor	A0000012H	e0000012	horjiawei@u.nus.edu	90000011	Bachelor of Computing		\N
f39b6ba1-578f-41c6-877c-e4f848aae90b	Xiaoying	Yan	A0000013H	e0000013	yanxiaoying@u.nus.edu	90000012	Bachelor of Computing		\N
154c6f3a-76f0-474f-be9a-353ce83f2eb1	Donovan	Singh	A0000014H	e0000014	donovansingh@u.nus.edu	90000013	Bachelor of Computing		\N
5bddb539-1d90-449b-aeec-33f5f3cd9430	Brandon	Lau	A0000015H	e0000015	brandonlau@u.nus.edu	90000014	Bachelor of Computing		\N
df1e72b7-5151-4012-94e0-74e1571b50f3	Kai Wen	Ng 	A0000016H	e0000016	ngkaiwen@u.nus.edu	90000015	Bachelor of Science		\N
2185a485-c5d6-4292-be4b-eb44e99068f3	Jason	Lee	A0000006H	e0000006	jasonlee@u.nus.edu	90000005	Bachelor of Science		\N
d8ea973b-294a-4abc-8bcb-8d7741283ac4	Jason	Tan	A0000002H	e0000002	jasontan@u.nus.edu	90000001	Bachelor of Science		\N
91eeb2d4-a3a6-439e-bb17-03dcdc416dae	Jing En	Wong	A0000001H	e0000001	wongjinen@u.nus.edu	90000000	Bachelor of Computing		\N
\.


--
-- Name: projects_project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_project_id_seq', 204, true);


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

