PGDMP     5                
    z            vtys2    15.0    15.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16460    vtys2    DATABASE     �   CREATE DATABASE vtys2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE vtys2;
                postgres    false            �            1259    16461    tb_canlilar    TABLE     �   CREATE TABLE public.tb_canlilar (
    id_tur integer NOT NULL,
    tb_isim character varying,
    tb_resim character varying,
    tb_tehlike character varying
);
    DROP TABLE public.tb_canlilar;
       public         heap    postgres    false            �          0    16461    tb_canlilar 
   TABLE DATA           L   COPY public.tb_canlilar (id_tur, tb_isim, tb_resim, tb_tehlike) FROM stdin;
    public          postgres    false    214   �       e           2606    16467    tb_canlilar tb_canlilar_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.tb_canlilar
    ADD CONSTRAINT tb_canlilar_pkey PRIMARY KEY (id_tur);
 F   ALTER TABLE ONLY public.tb_canlilar DROP CONSTRAINT tb_canlilar_pkey;
       public            postgres    false    214            �   �  x��X�n�F>�OA �Q\��m�()i��N�8m�"�bH��-�]f��/зh��&��r��^���ؑ��r�;�}�y��L�ǘ�
I�V��D@�tʚ���c�*K%��+#6a�){��9�S����)��0�V)�a�n�]��k��$2Dvn�Ғ��2���snu`.nn�lL��	h𡆼���X�|o�l<dI]�A��wmz�|�"`�BO��s-��A��W����]�8bG	;Q�)1��2�R��-Ҟ0O�G(ťo�t�u����l	�����x	��Q����Ə�J=�?��2�sZ݈���B�
�VVCJVԑ �L+�[�`'\	�I�ʑw�A���]Wgfl�j�X�J��Ur���hgf�E�|��萋2���T2������=E��[�%d&d"��dw�(���L��:=+[JN���1[�{ ?fǫ���/w�� �z:�-TBwN\ڝb67���2����rZ�n�cŞ�?��������ǫ���Y8ac�g���C�cP�y�2i��K�'���7�㗠S!��~L�t�N����o����`��N�B��םPoŷPG�����͑���BA�����ҽ�}�3�^./�ua��C1{B��m�|��|��������=�N�Bl w��@7s�0VAӎ�:-� U���7��N�����X��T��ƈ�#�� V��gǠ���H��K�(h$�T�)RKU�H�ՙ!��ˬ�q��ZIg�6����?/�m�cž:ۑw����g�9�����sߌ���XA�"��ķ�6|W���K{_�ƒ�^��Ո=uX��ۯ��4��+-��[�+������,Ҵ)�����v���y%U��3	!�����9tj���ޙ)zK��c�C�fJ��j�g.��3r��Z+RZp��>lU���������J��     