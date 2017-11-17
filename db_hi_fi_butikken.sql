-- phpMyAdmin SQL Dump
-- version 4.8.0-dev
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 17. 11 2017 kl. 09:48:59
-- Serverversion: 10.1.26-MariaDB
-- PHP-version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hifi_butik`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `accesstokens`
--

CREATE TABLE `accesstokens` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `token` varchar(600) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `accesstokens`
--

INSERT INTO `accesstokens` (`id`, `userid`, `token`, `created`) VALUES
(1, 1, 'b30a589cd48717829fe19e60f06a32978901424c714fde571ea8754ba7087c0c28dbc9c8a99ccbb915a02a932e56257f236fb084e69a87dcb46161a323d47aa4b6371bcf2bbfa39e69486ce455b991432a8b946fb5946856165a21e828825c51608397e26d819d21cf54300164396b4c1c21c164e4c96ee5dedf45605dd3da56a07ef803a25f3e95ffb4006cf4b8875ed4184db15929f9ddae84ca2b81bb7060f5258e6801c019489dc5c3e79246fc62187fa7ccb8c25dd596c1287e6d6977ffbfea754649a0862026e5c7924cf9ddd803bebf771f3903bcbf3339dcff5a9b970b5f5718be805c3fa7f06aa9fa7ff0bdba7cc6746e981aa2f495a2f228f8db18', '2017-11-15 09:15:15'),
(2, 1, '59dd38c9b7d6dc144690ece92b01a86061b085d80ff3ce3203c72643f1047d81165991436ae47ad0d57a3a1a390a5d5e668be81662e3e636d536f5cadb4486d723c064c08a8e43185653d408dfc3aefb0b7bc9e9aa2e69aced7ae8b032633d51edc841b43c86e526616c1546ef585689c881742b0f9a55630250fb2ca9b1e9bdf52137ad591ec7b0d89ef75805ac8024e80e0e027c30549d69361a9102b6ea13e03c13571ea3bfd117ec2b7b89b4e5f8346079dc6f019cfe52dc90e4c37e1d16b95380118bda24e3e299177344d0117a4c995d7224086690e7ee5420f3ab47df959e4ba28d1619e6c6030b916658aa076056c3bc417ae842a7a63fef0d9b8842', '2017-11-15 09:21:48'),
(3, 1, '9eadfd42872d62289fd1fa0a01624ec8e4a850afb802b06b48f9e71af91995e6fe4b8a1b645853d0c6c758af22efc6bba6187cc4905dae05bccd6b505f9001f9cb920bcfa86e5f569230378db461e482cd40bc7e3da97a4c1cfe031f0c2c69424e0877e777a2d62b5aae2684e94f0b9ec28e2dab59917b76f49b1d59e096fa1d7fb000e638474c181d87602cfb757bff914e1efb46b46326a80a7e27a83e7bc746a8b8f64b43b7f31d376ca7ac16a0a1bb7fd1f2b0d2a14eb9ef19d44b614516bd3839d2006c6c7dec807cbd70b7b7b0b7ca893677b7fa2b86bbd23a39ac5024db4ed171003cba09585e046b3c012d3b0796c298c5bd91ec17d4dc3217e6257a', '2017-11-15 09:23:00'),
(4, 1, '7da12168131fcbd7015c7906d290d0230505beb94b4fb9a66b971859a8a951d6fa16d00aa1da43fb9a6e0e95cdc1a5ab09e13384fe8f53b8baae88e0c173d2d97217ce4e4e659a79d513f104020d447a50ad2d1770512e3483bd6817c6378c31a5558da77464833cc3e253cc13441c4e1f62fe7ed3fd2dc213975cbbb39a63e538097949004706ad83e9e7adf7193a8ea935b7ce1e4cf23055c8097f8284378f59b1d708f6417a78e0626ea51ea9c84aae726e9e8f6ae890dd0473fe103a056b34b6950070e923fb59e9cbc6ca5c6966ca33c70c063cc8cf8a7c02a5c2ccbe74af3a1829e6526c485ea74c21b71cef45f9a3855f3c2146d576b3e47c2d3cb401', '2017-11-15 09:23:37'),
(5, 1, '9e42850a1130113572db7a3b49b0796a353dc5917fa8ec47fcd536e4a5f4d9235ebec459421f1aec160cf673210d3e1ae22d48a5e9842ac50865596bcbe52c1ac760f41f66225301e3c7eeb789c443696dbea263b2441fc3944b8bcf9b49e433543e4b7a2565e665dfae0f961d2981242d6d98220066e537ac42217fce3283bb530149b7c17ae8b429a60f7b2f85fa2caf79461803281f95713d6520f590acf97cbd776ff5b0d9eb4cc8bf506786fc4bee374d44472e86ca80a836f4d56b3963b1d6dd0c046fbb3c873c23b85aeff5b084459136dbdd75252fa0c7058c16d313480e946d8b3db812d1fd17a22653b7c08947b9ad99757f3524423168b4696d69', '2017-11-15 09:41:30'),
(6, 1, 'aeead0391f157c1fb4e600c7954108f86e98e99572f035a9ab9405b2bb46e4a1c65d73d7d824031eab8cddb2ee293a3af12d94bd9696f9f206ea552bdf3f12c71b4e52ca38aff3ac49962bd7aa88ad00c620eff2d764cbb0e914088a78b27b9c567f3c8039b560fe9d91ec3bc63cb3edf86cdc2dd0666bfe88d27c11c79a4736232f453374bb7c1e7bb8b8e5f8d799c193f29dab91b137d832ef9972cdfed1c19e2883c5d2d9179f7d21c6be23873b26feab7763bd48620c7b64fea4140951c87364278654f2df3c6b27fe0ecdf470c93a6a87054323b270d97dda0097744e809a46c9629f5f6da50a5bd97b38849497fdab9e5ce99d241963a0b27ac8743914', '2017-11-15 10:20:37'),
(7, 1, '30756b3329a72ace37c478aa0663aed97f8d16652c400a237f9e6b45c26f0a17a21520d1d4d0ba05f0ce91972b62c72df83251439ddd078d26937ea3e8e4250ba9cc0be8f60024222dc079ded4732d80c73a5a62c1c27b727d1daff5a6bf744b8a3082e85961582a37ea77e3997d8ac7d5a43bd544482d5bcd7e619015de92551c4f75b5185340380a4d19d967677612a67de80569e2363c75047b3a831a71386ffadd87b324512debcd274cc5dfa911976512863efd822f697720631562db03f86c86b674f342800069485cb781c02564323ffc3d8d7071f97bb102a7ef71d885588a90ebab461c45ce1f3a404848cd3634ddd3373aab49e55f71e9087d1838', '2017-11-15 12:26:42'),
(8, 1, 'c283b87120321ebc2ce26a11e8741fef9e41d1dd5a208f9261b3bb0ac57e5974f7cf378d6a87e6fc86a25bb110ed469d956312137150aa21f15c837bfed89bd2a51b04b17a4ae1eb10bacdb4c173864ff2500c79de2443fb4d375862d23ad5f82972a53357ae80caca12282dea1e4cbfb4bb68e37e03471a6b5171a3f482375d0da65bf8c4b3a732d43017e06803dc49781f2732202235a730498efb93d08050aa9dcfafed941362115eb63438b96b0d3cee3712fdb05f1bac86b1b555926ca709303d50eb465b97cfdc7c0ce7061a35f71c85bc12cd1714033bd5ca1577033dfcd2e6cd5c4d13ff541651e6dce8bc8e20f8e4aecad763f31a5fce41f99ac23b', '2017-11-15 12:26:44'),
(9, 1, '6cf69668fe53403d3baeb4d8ad38be67ce68fd6817659f2b4fc17abd8dd08eee49585c9e1b795be54af4d3a51586a24a2b0f8ce9e0d7a6fb79b2fb106b60095b6c09a081bbe541ffb4b4a65e92fb16e6382418e08a5c38dcfd8bc4371d8aeeb1a1babef406fc98af5fa87a67fbad011dc54832eca3bca5cc910dc716d849c8264dd7b19abaaf7210dd002bbb5b75ce2ae275d43d01c630cadffa4234c5500c968d4707dc78a08550d4dd59b2017b39be8098eb1058f5db56df9e104b81bad41550ee7b36b2a6ec790c8fc76b79208c15f6e3c96b6438cb43a6111b8aba290d88ce523b04d1d5d279167d00e2692ff5f6e57fa5bb24e7d9995fef9aa70aecd851', '2017-11-15 13:44:04'),
(10, 1, '8a72946286e079c468a176f17e9868c270459051babde68913784abee56abbd2de7e0d370e52bac90772cd92a3587b1ddc3fe3aae1639a8b8d5fa65a8f8cbb1940419d8e1fd0073e8a8c44f1dba978d7c1733e705e84e13c44e742f8f203255bc4d7f6bd4770428e2e0d3e3ac2038c6d37dc3c2f4f5073018ab32707f04dbe02bf57599595b023f393f7c0e36db1557f261ea4c17e594e1ccad2cba24fa005bb105c2a70b6997e181f7c792fe774e3f22a590f10dde9496b37853bc98b161293b464f80b59612790b347e77ec72ae5e0fcb002b860f9e603ed1520fb2a051a9e3eec3e95d0de66bad2c8eee0d3752a6c5eafe100833f48b9872afd84ffe39d74', '2017-11-16 10:19:00');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kategori`
--

CREATE TABLE `kategori` (
  `ID` int(11) NOT NULL,
  `kategori` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `kategori`
--

INSERT INTO `kategori` (`ID`, `kategori`) VALUES
(1, 'CD Afspillere'),
(2, 'DVD Afspillere'),
(3, 'Effektforstærkere'),
(4, 'Forforstærkere'),
(5, 'Højtalere'),
(6, 'Int. Forstærkere'),
(7, 'Pladespillere'),
(8, 'Rørforstærkere');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontakt`
--

CREATE TABLE `kontakt` (
  `ID` int(11) NOT NULL,
  `Fornavn` varchar(255) NOT NULL,
  `Efternavn` varchar(255) NOT NULL,
  `Besked` text NOT NULL,
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `producent`
--

CREATE TABLE `producent` (
  `ID` int(11) NOT NULL,
  `producent` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `producent`
--

INSERT INTO `producent` (`ID`, `producent`) VALUES
(1, 'Creek Audio Ltd'),
(2, 'Exposure'),
(3, 'Parasound'),
(4, 'Manley'),
(5, 'Pro-ject Audio Systems'),
(6, 'Bösendorfer'),
(7, 'Epos Ltd'),
(8, 'Harbeth Loudspeakers'),
(9, 'Jolida');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `produkter`
--

CREATE TABLE `produkter` (
  `ID` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL,
  `pris` decimal(50,4) NOT NULL,
  `beskrivelse` text NOT NULL,
  `fk_kategori_id` int(11) NOT NULL,
  `fk_producent` int(11) NOT NULL,
  `billede` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `produkter`
--

INSERT INTO `produkter` (`ID`, `navn`, `pris`, `beskrivelse`, `fk_kategori_id`, `fk_producent`, `billede`) VALUES
(1, 'Creek Classic', '5.0000', 'En god klassiker ', 1, 1, 'creek_classic_cd.jpg'),
(2, 'Creek Destiny', '6.0000', 'Med Creek Destiny er alt bare på toppen', 1, 1, 'creek_Destiny_CD.jpg'),
(3, 'Creek Evo', '8.0000', 'Creek evo er helt i top og bare klar til en god hygge aften.', 1, 1, 'creek_evo_cd.jpg'),
(4, 'Exp 2010S', '10.0000', 'En stabil CD afspiller', 1, 1, 'Exp_2010S_CD.jpg'),
(5, 'Creek Classic DVD', '5000.0000', 'den her sparker bare røv til hver en hygge aften', 2, 1, 'creek_classic.jpg'),
(6, 'Exposure 2010S', '5000.0000', 'exposure er en god for hver en hygge spiller', 2, 2, 'exposure_2010S.jpg'),
(11, 'Parasound D200', '3000.0000', 'parasound er bare god', 2, 3, 'parasound_d200.jpg'),
(12, 'Parasound Halo p3', '6000.0000', 'Parasound halo p3 er noget god', 2, 3, 'parasound_halop3.jpg'),
(13, 'Manley Mahi', '15000.0000', 'manley mahi er en af de bedste til prisen ', 3, 4, 'manley_mahi.jpg'),
(14, 'Manley Neoclassic 300b', '16000.0000', 'Neoclassic er den bedste til prisen', 3, 4, 'manley_neoclassic300b.jpg'),
(15, 'Manley Snapper', '20000.0000', 'Snapper er bare fed', 3, 4, 'manley_snapper_2.jpg'),
(16, 'Parasound Haloa 23', '10000.0000', 'Parasound haloa 23 er en af de lidt billigere, men den gør det stadig meget godt', 3, 3, 'parasound_haloa23.jpg'),
(17, 'Creek OBH 22 Passive Preamp', '4000.0000', 'Creek obh er god til prisen', 4, 1, 'Creek_OBH_22_Passive_Preamp.jpg'),
(18, 'Parasound Classic 7100', '7000.0000', 'Parasound classic 7100 er god til prisen', 4, 3, 'parasound_classic7100.jpg'),
(19, 'Parasound halo d3', '7500.0000', 'Parasound halo d3 er god til prisen', 4, 3, 'parasound_halod3.jpg'),
(20, 'Project Prebox', '6300.0000', 'Project Prebox er bare god til prisen', 4, 5, 'Project_prebox.jpg'),
(21, 'Boesendorfer Vcs  Wall', '6000.0000', 'de spiller sinds til prisen', 5, 6, 'boesendorfer_vcs_wall.jpg'),
(22, 'Epos m5', '7000.0000', 'Epos kan bare sparke gang i festen', 5, 7, 'epos_m5.jpg'),
(23, 'Harbeth Hl7es2', '7250.0000', 'Harbeth gir bare den lyd man vil have', 5, 8, 'harbeth_hl7es2.jpg'),
(24, 'Harbeth monitor30', '4300.0000', 'harbeth 30 sparker bare gang i den fest!!', 5, 8, 'harbeth_monitor30.jpg'),
(25, 'Harbeth P3es2', '6000.0000', 'Harbeth P3es2 er bare vild', 5, 8, 'harbeth_p3es2.jpg'),
(26, 'Creek A50I', '7000.0000', 'Creek A50l er god til prisen', 6, 1, 'creek_a50I.jpg'),
(27, 'Creek Classic 5350SE', '9250.0000', 'Creek 5350SE er bare god til prisen', 6, 1, 'creek_classic5350SE.jpg'),
(30, 'Creek Destiny  Amp', '5250.0000', 'Den gør bare det den skal!', 6, 1, 'creek_Destiny_CD.jpg'),
(31, 'Manley Snapper forstærker', '2525.0000', 'Manley snapper er god til prisen', 6, 4, 'manley_neoclassic300b.jpg'),
(32, 'Manley Stingray', '6500.0000', 'Den er bare god', 6, 4, 'Manley_Stingray.jpg'),
(33, 'Pro Ject Debut 3 BL', '4005.0000', 'Den spiller godt', 7, 5, 'Pro_ject_Debut_3_bl.jpg'),
(34, 'Pro ject Debut III red 1', '3000.0000', 'Når damen skal have en god aften så køb den her!!', 7, 5, 'Pro_ject_Debut_III_red_1.jpg'),
(35, 'Pro ject Debut III yellow 1', '3152.0000', 'Er god til prisen', 7, 5, 'Pro_ject_Debut_III_yellow_1.jpg'),
(36, 'Pro ject rpm 5', '6010.0000', 'den er bare vild', 7, 5, 'Pro_ject_rpm_5.jpg'),
(37, 'Pro Ject rpm10', '4010.0000', 'den spiller bare godt', 7, 5, 'Pro_ject_rpm10.jpg'),
(38, 'Jolida JD102b', '4500.0000', 'Jolida er god til prisen', 8, 9, 'jolida_JD102b.jpg'),
(39, 'Jolida JD202a', '6000.0000', 'den virker godt', 8, 9, 'jolida_JD202a.jpg'),
(40, 'Jolida JD300b', '16000.0000', 'den er alt værd', 8, 9, 'jolida_JD300b.jpg'),
(41, 'Jolida JD302b', '5250.0000', 'den er skide god og billig', 8, 9, 'jolida_JD302b.jpg'),
(42, 'Jolida JD502b', '1111.0000', 'Den her er billig, men god', 8, 9, 'jolida_JD502b.jpg'),
(51, 'gdfg', '312312.0000', 'j', 6, 3, ''),
(53, 'ffas', '32423.0000', 'iojhjk', 5, 9, ''),
(54, 'jhjghj', '3123123.0000', 'jhgjghj', 4, 6, ''),
(55, 'sad', '123123.0000', 'sad', 6, 4, '');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'sha1$db4788b0$1$fdb72d43f670f34e23fd2d6f559ed543ad1248c9');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `accesstokens`
--
ALTER TABLE `accesstokens`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`);

--
-- Indeks for tabel `kontakt`
--
ALTER TABLE `kontakt`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indeks for tabel `producent`
--
ALTER TABLE `producent`
  ADD PRIMARY KEY (`ID`);

--
-- Indeks for tabel `produkter`
--
ALTER TABLE `produkter`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `navn` (`navn`),
  ADD KEY `fk_kategori_id` (`fk_kategori_id`),
  ADD KEY `fk_producent` (`fk_producent`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `accesstokens`
--
ALTER TABLE `accesstokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Tilføj AUTO_INCREMENT i tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Tilføj AUTO_INCREMENT i tabel `kontakt`
--
ALTER TABLE `kontakt`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tilføj AUTO_INCREMENT i tabel `producent`
--
ALTER TABLE `producent`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Tilføj AUTO_INCREMENT i tabel `produkter`
--
ALTER TABLE `produkter`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `produkter`
--
ALTER TABLE `produkter`
  ADD CONSTRAINT `produkter_ibfk_1` FOREIGN KEY (`fk_kategori_id`) REFERENCES `kategori` (`ID`),
  ADD CONSTRAINT `produkter_ibfk_2` FOREIGN KEY (`fk_producent`) REFERENCES `producent` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
