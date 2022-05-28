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
    password character varying(255) NOT NULL
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
1	Bandersnatch	Wang Xinyi	Sun Ruoxin	Lim En Qi Angie	artemis
2	JavaBean	Ng Shi Jun	Kang Wenhan	Theodore Pinto	artemis
3	Pilot	Wong Jing En	Loh Yi Kuang	Andrea Tan Ker Yue	artemis
4	Project Flow	Darren Teo De En	Wesley Bennett Loo Dela Cruz	Li Huankang	artemis
5	W	Elbert Benedict	Farrel Dwireswara Salim	Hoang Manh Duc	artemis
6	NoteTogether	Izz Hafeez Bin Zek Hazley	Saw Jing Wen	Suther David Samuel	artemis
7	Crayonz	Joy Tan QiaoTong	Ritika Manish Joshi	Ni Jiaying	artemis
8	Unlockal	Ong Jin Xiang, Bryan	Tabriz Pahlavi	Nicholas Lowie	artemis
9	Focat	Lim Jia Yi Venus	Chia Yun Rong	Andrea Tan Ker Yue	artemis
10	ModTree	Nguyen Vu Khang	Tan Wei Seng	Loh Jia Ming, Rayner	artemis
11	Algo-Rhythm	Leo Zhen Yu, Melvin	 Brandon Lau	Hoon Darren	apollo11
12	I Have A Team	Xu Yi	 Yan Xiaoying	Andrea Tan Ker Yue	apollo11
13	SEPlan	Donovan Singh	Jamie Lee Fang Hua	Loh Jia Ming, Rayner	apollo11
14	Shooting Portals	Eugene Tang KangJie	Thio Leng Kiat	Heng Guo Jun	apollo11
15	Ren	Cedric Chia Hup Siang	Mok Yao Hui	Nay Lin Han	apollo11
16	Event Horizon	Li Po Hsien	Connor Shihern Lim	Adi Nata	apollo11
17	SushiWars	Adelle Low Song Leng	Eric Neo Zi Zheng	Lim Ngian Xin Terry	apollo11
18	Sweet and Tasty	Liong Wei Yong Deen	Hung Hin Wang Clement	Papattarada Apithanangsiri	apollo11
19	TaskSpace	Lee Jing Ting	Jeff Hong Zhi Yang	Alvin Chee Teck Weng	apollo11
20	Annual Rings	Soo Jia Xi	Glenn Ong JunJie	Hoon Darren	apollo11
21	Let's Meat	Wang Liang Bing	Yong Duan Kang	Adi Nata	apollo11
22	CopyPaste	Wang Xiuxuan	Bag Devesh Kumar	Vevek Selvam	apollo11
23	Finding Orbi	Lim Shi Ern Grace	Ng Rui Yan Rena	Adi Nata	apollo11
24	Level Tree	Lim Hong Yuan	Chow Yee Sen	Andrea Tan Ker Yue	apollo11
25	Team FitNUS	Loh Yuan Long, Kedrian	Ng Kai Wen	Elroy Goh Jun Ying	apollo11
26	Pen Island	Lin Zizheng	Darryl Ee	Allard Quek	vostok
27	Toothless	Lim Zhen Yong	Lewis Chong Li Wei	Chin Xing Yi Rebecca	vostok
28	Kachow!	Wang Xin Yu	Charles Lim Jun Hao	Nguyen Van Binh	vostok
29	SupperFarFetch	Javen Leo Jun Yuan	Lee Kai Sheng Shawn	Patrick Tan Kian Seong	vostok
30	Jawa	Angela Wong Si Qi	Hor Jia Wei	Marcus Tan Wei	gemini
31	NerdHelper	Denzel Tan Tze En	Justin Lum Jhun Mun	Nay Lin Han	gemini
32	BoTurtle	Wu Yongxin	Oong Jin Rong Jared	Nay Lin Han	gemini
33	StonkTrek	Ng Chek Khau	Jacky Lu Jiaxin	Noel Mathew Isaac	gemini
34	Genesis	Tan Cheong Hsien Ryan	Wilson Lee Jun Wei	Papattarada Apithanangsiri	gemini
35	Walkaholics	Ho Jia Wei	Shang Feiyang	Papattarada Apithanangsiri	gemini
36	Sleepy	Tan Kylie	Gibson Yip Wei Yang	Rama Venkatesh	gemini
37	AstroGemini	Vidya Pradeep	Ayushi Yadav	Tan Shi Min	gemini
38	Team Splatoon	Yu Changyang	Yu Zizhen	Tan Shi Min	gemini
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstname, lastname, studentnumber, userid, email, contactnumber, programme, password) FROM stdin;
e0f6c4e1-cf74-4d2b-82b7-5aa35f6eaac5	Jun Kang	Ang	A0235183H	admin	orbital@u.nus.edu	91234567	Bachelor of Computing	$2b$10$OiwnKmOSwQo0D7fhNIlvce9uoDShImF/n/3SdI8KZ9tAcke18Gv2C
768fba3d-b695-441e-952c-83fdf71eb2e5	Jun Kang	Ang	A0635183H	e0727183	angjunkang@u.nus.edu	91234567	Bachelor of Computing	$2b$10$4UrE18XiG5LujpuXVPd87evZqjhJls3iUHoUp6ktBxegOZFN4z9X6
\.


--
-- Name: projects_project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_project_id_seq', 39, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

