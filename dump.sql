PGDMP         %             
    z            poc_ts #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1) #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    34306    poc_ts    DATABASE     [   CREATE DATABASE poc_ts WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE poc_ts;
                postgres    false            �            1259    34322    posts    TABLE     �   CREATE TABLE public.posts (
    id integer NOT NULL,
    text text NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);
    DROP TABLE public.posts;
       public         heap    postgres    false            �            1259    34321    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public          postgres    false    210                       0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public          postgres    false    209            �           2604    34325    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210                      0    34322    posts 
   TABLE DATA           5   COPY public.posts (id, text, created_at) FROM stdin;
    public          postgres    false    210   `
                  0    0    posts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.posts_id_seq', 5, true);
          public          postgres    false    209            �           2606    34330    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public            postgres    false    210               h   x�e�=
�@��9�p�����,iDl�$MN/
����=�����-���褃�dF%��~�0�U����\��o�@Т��t���1�$c�G��&�     