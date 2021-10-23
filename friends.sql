-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table friends.age_restrict
CREATE TABLE IF NOT EXISTS `age_restrict` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `age` longtext NOT NULL,
  `key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table friends.age_restrict: ~0 rows (approximately)
/*!40000 ALTER TABLE `age_restrict` DISABLE KEYS */;
/*!40000 ALTER TABLE `age_restrict` ENABLE KEYS */;

-- Dumping structure for table friends.audio__info
CREATE TABLE IF NOT EXISTS `audio__info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` longtext NOT NULL,
  `hash` longtext NOT NULL,
  `name` longtext NOT NULL,
  `size_mb` longtext NOT NULL,
  `duration` longtext NOT NULL,
  `year` longtext NOT NULL,
  `title` longtext NOT NULL,
  `album` longtext NOT NULL,
  `track_number` longtext NOT NULL,
  `band` longtext NOT NULL,
  `composer` longtext NOT NULL,
  `artist` longtext NOT NULL,
  `duration_secs` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.audio__info: 6 rows
/*!40000 ALTER TABLE `audio__info` DISABLE KEYS */;
INSERT INTO `audio__info` (`id`, `path`, `hash`, `name`, `size_mb`, `duration`, `year`, `title`, `album`, `track_number`, `band`, `composer`, `artist`, `duration_secs`) VALUES
	(1, 'files/audio_music/3b433885b1493620980843dc45b306d7.mp3', '32be4a2b30aee43096025a33a6f1503c', 'Best_of_Sia Mixtape-www.ForeignDjMixtapes.com', '93.431578', '1:37:18', '2019', 'Best of Sia Mixtape-www.ForeignDjMixtapes.com.mp3', 'www.ForeignDjMixtapes.com', 'unknown', 'www.ForeignDjMixtapes.com', 'www.ForeignDjMixtapes.com', 'www.ForeignDjMixtapes.com', '5837.5575135669'),
	(2, 'files/audio_music/47040b3ccf8019b9248ef5986a08abbf.mp3', '554e8ad0980e5f53ce0c1f97ed801b9d', 'Best of Eminem_www.NaijaDjMixtapes.com', '100.740584', '1:44:55', '2019', 'Best of Eminem-www.NaijaDjMixtapes.com (IG @djmixtapesng)', '(www.NaijaDjMixtapes.com) Best of Eminem', 'unknown', 'www.NaijaDjMixtapes.com', 'www.NaijaDjMixtapes.com', '(www.NaijaDjMixtapes.com) Best of Eminem', '6295.3825'),
	(3, 'files/audio_music/60b473ab14b9d1e3761061ddf8eba3e5.mp3', '68bca12f60c945b101fbc42619eed0f8', 'Dj Baddo Best Of Lilkesh Mix', '57.248256', '59:18', 'unknown', 'Dj Baddo Best Of Lilkesh Mix || Follow @Djbaddo On Instagram', 'unknown', 'unknown', '@Djbaddo @Baddoentworld', 'Baddo Ent World', 'unknown', '3557.9298560579'),
	(4, 'files/audio_music/98aa8e25baf8243149fb4727e5e64f09.mp3', '81a0d1bab69c0feaae4bd7b2c6521c37', '2pac - It ain t easy', '11.778671', '4:54', '2009', '2pac - It ain\'t easy', '2pac - It ain\'t easy', 'unknown', 'unknown', 'unknown', 'unknown', '294.18'),
	(5, 'files/audio_music/6f189433a8f546ae3d0d55f5462a9817.mp3', '45ddd635871f5fe7ad9f7bba4899b793', 'Best_of_Nas_Mixtape-www.ForeignDjMixtapes.com', '71.512127', '1:13:35', '2020', 'Best of Nas Mixtape-www.ForeignDjMixtapes.com.mp3', 'www.ForeignDjMixtapes.com', 'unknown', 'www.ForeignDjMixtapes.com', 'www.ForeignDjMixtapes.com', 'www.ForeignDjMixtapes.com', '4415.1117921076'),
	(6, 'files/audio_music/15461bea81300c383664379ddc505326.mp3', '8fea74d88440daaf9b05592ba8300911', 'DJ_Flozy__ Best Of Flavour Mixtape-www.NaijaDJMixtapes.com', '39.638809', '1:22:32', '2020', 'DJ Flozy â€“ Best Of Flavour Mixtape-www.NaijaDJMixtapes.com.mp3', 'IG @NaijaDJMixtapes', 'unknown', 'www.NaijaDJMixtapes.com', 'www.NaijaDJMixtapes.com', 'www.NaijaDJMixtapes.com', '4951.635125');
/*!40000 ALTER TABLE `audio__info` ENABLE KEYS */;

-- Dumping structure for table friends.chatings
CREATE TABLE IF NOT EXISTS `chatings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `q_sender` longtext NOT NULL,
  `b_sender` longtext NOT NULL,
  `word` longtext,
  `chat_key` longtext NOT NULL,
  `date` datetime DEFAULT NULL,
  `device` longtext,
  `sent` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.chatings: 5 rows
/*!40000 ALTER TABLE `chatings` DISABLE KEYS */;
INSERT INTO `chatings` (`id`, `q_sender`, `b_sender`, `word`, `chat_key`, `date`, `device`, `sent`) VALUES
	(3, '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', 'V2tSS1IwMTNQVDA9', 'dee666adc3f799e89f3471167a93ec18', '2021-09-14 23:15:33', 'computer', 1),
	(5, '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', 'VjJwT1MySkdiRmxWVjJSclVqSm9NbE5WWkV0bFYwbDVUMFF3UFE9PQ==', 'cd0377af9540f92e3907ee2243e9b9be', '2021-09-14 23:30:21', 'computer', 1),
	(6, '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', NULL, '7c1c9b4180643a11997eb52d772d9959', NULL, NULL, 0),
	(16, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', NULL, '647d5f78b9242e6a9281f7da58133c00', NULL, NULL, 0),
	(15, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', 'VTFSS1lXUnRTWGxXUlU1MlVsVktlRmxxVGs5aU1IUklWRzVhYVZVeWVIVlpiR1JIWTBkS1RsTXlaRXBOTURWdlYydEZPVkJSUFQwPQ==', '8f15cb4558efd16fc50fad619f879e76', '2021-09-27 06:44:52', 'computer', 1);
/*!40000 ALTER TABLE `chatings` ENABLE KEYS */;

-- Dumping structure for table friends.chatings_file
CREATE TABLE IF NOT EXISTS `chatings_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chat_key` longtext NOT NULL,
  `chat_file_type` longtext NOT NULL,
  `chat_file_path` longtext NOT NULL,
  `chat_file_hash` longtext NOT NULL,
  `audio_video_key__` longtext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.chatings_file: 4 rows
/*!40000 ALTER TABLE `chatings_file` DISABLE KEYS */;
INSERT INTO `chatings_file` (`id`, `chat_key`, `chat_file_type`, `chat_file_path`, `chat_file_hash`, `audio_video_key__`) VALUES
	(3, 'cd0377af9540f92e3907ee2243e9b9be', 'image/jpeg', 'files/chat_attached/829362c2f857a678e3ba6b79ae44147f.jpg', 'a2477be91e848d60bac6ffce72ce0d98', NULL),
	(4, 'cd0377af9540f92e3907ee2243e9b9be', 'image/jpeg', 'files/chat_attached/7feaab62b1e157061eea44a16034f642.jfif', '475f3b926eb5b9ce81a0c43603a97356', NULL),
	(5, 'cd0377af9540f92e3907ee2243e9b9be', 'image/jpeg', 'files/chat_attached/a9d0985f8b75984c4f130b9acfe1e71e.jfif', 'db9ee4024f65edbaea5ebcb02a4bbfc9', NULL),
	(6, 'cd0377af9540f92e3907ee2243e9b9be', 'image/jpeg', 'files/chat_attached/a84a1bfb44cff29b1acd8885f04c81e6.jpg', '75ef2eecaf7584ee3e214ea61671825c', NULL);
/*!40000 ALTER TABLE `chatings_file` ENABLE KEYS */;

-- Dumping structure for table friends.chat_recievers
CREATE TABLE IF NOT EXISTS `chat_recievers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `q_reciever` longtext NOT NULL,
  `b_reciever` longtext NOT NULL,
  `chat_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.chat_recievers: 5 rows
/*!40000 ALTER TABLE `chat_recievers` DISABLE KEYS */;
INSERT INTO `chat_recievers` (`id`, `q_reciever`, `b_reciever`, `chat_key`) VALUES
	(15, '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '8f15cb4558efd16fc50fad619f879e76'),
	(3, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', 'dee666adc3f799e89f3471167a93ec18'),
	(16, '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '647d5f78b9242e6a9281f7da58133c00'),
	(5, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', 'cd0377af9540f92e3907ee2243e9b9be'),
	(6, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '7c1c9b4180643a11997eb52d772d9959');
/*!40000 ALTER TABLE `chat_recievers` ENABLE KEYS */;

-- Dumping structure for table friends.chat_seen
CREATE TABLE IF NOT EXISTS `chat_seen` (
  `seer_q` longtext NOT NULL,
  `seer_b` longtext NOT NULL,
  `seen_q` longtext NOT NULL,
  `seen_b` longtext NOT NULL,
  `date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table friends.chat_seen: 2 rows
/*!40000 ALTER TABLE `chat_seen` DISABLE KEYS */;
INSERT INTO `chat_seen` (`seer_q`, `seer_b`, `seen_q`, `seen_b`, `date`) VALUES
	('62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-10-08 05:42:43'),
	('3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-06 04:13:50');
/*!40000 ALTER TABLE `chat_seen` ENABLE KEYS */;

-- Dumping structure for table friends.comment_post
CREATE TABLE IF NOT EXISTS `comment_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter_b` longtext NOT NULL,
  `commenter_g` longtext NOT NULL,
  `date` datetime NOT NULL,
  `comment_word` longtext NOT NULL,
  `key_link` longtext NOT NULL,
  `device` longtext,
  `key_main` longtext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.comment_post: 9 rows
/*!40000 ALTER TABLE `comment_post` DISABLE KEYS */;
INSERT INTO `comment_post` (`id`, `commenter_b`, `commenter_g`, `date`, `comment_word`, `key_link`, `device`, `key_main`) VALUES
	(1, 'a27119e13be90d9867b96e03ad6259de', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-09-06 07:02:46', 'ðŸ™„ðŸ™„ðŸ™„', '0bfda1cbe39a846936804ac1cd9be7e3', 'computer', '1f73ac1bc5952b261e76b1a6ac188c01'),
	(4, 'a27119e13be90d9867b96e03ad6259de', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-09-06 08:18:04', 'ðŸ¤—ðŸ¤—ðŸ¤—', 'bd49d3c5464d76be231a55f6887a5d9a', 'computer', '210c90ad9d240066a91e24f91e7a31f5'),
	(3, 'a27119e13be90d9867b96e03ad6259de', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-09-06 08:12:36', 'ðŸ¤”ðŸ¤”ðŸ¤”', '106bbca401fc25c1343dc40a01dc3d38', 'computer', '34c172568af73be767be938a05832cef'),
	(5, '97d14b1c9f695e960fd7ccbb8ac725dd', '4c96ecac7236f324c384463ba5a62a65', '2021-09-07 23:33:09', 'This is nice innit??', '106bbca401fc25c1343dc40a01dc3d38', 'computer', 'fd575339051aa399131d5377b6ef4b84'),
	(6, 'a27119e13be90d9867b96e03ad6259de', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-09-14 17:02:49', 'Lol those videos', '24c21cbb98049537e06baf81c865695e', 'computer', 'eff907722e30f97b7ae3128eb4858421'),
	(7, 'a27119e13be90d9867b96e03ad6259de', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-09-15 22:33:53', '@josh(com)gmail', 'eff907722e30f97b7ae3128eb4858421', 'computer', '774bad2e5d4e7076ffbf3aee8b8f6034'),
	(8, 'a27119e13be90d9867b96e03ad6259de', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-09-27 15:32:23', 'Hi @josh(com)gmailÂ #loveyourstyle', 'a2c0751e098f02ee23058bbdf951b91c', 'computer', '551903541ab254752a4b25ff7cedf62b'),
	(9, 'a27119e13be90d9867b96e03ad6259de', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-09-27 15:33:36', '#loveÂ #foodÂ #whoÂ #if', '106bbca401fc25c1343dc40a01dc3d38', 'computer', '147ed2b5f7b7a4339345ecb980295be2'),
	(10, 'a27119e13be90d9867b96e03ad6259de', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-09-30 21:07:58', 'Hell', '34c172568af73be767be938a05832cef', 'computer', '07788a4c7891073c6841030351d49094');
/*!40000 ALTER TABLE `comment_post` ENABLE KEYS */;

-- Dumping structure for table friends.contact
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adder_b` longtext NOT NULL,
  `added_b` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.contact: 1 rows
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` (`id`, `adder_b`, `added_b`) VALUES
	(1, 'a27119e13be90d9867b96e03ad6259de', '97d14b1c9f695e960fd7ccbb8ac725dd');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;

-- Dumping structure for table friends.cover_styler
CREATE TABLE IF NOT EXISTS `cover_styler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `b` longtext NOT NULL,
  `q` longtext NOT NULL,
  `pos-x` int(11) DEFAULT NULL,
  `pos-y` int(11) DEFAULT NULL,
  `blur` int(11) DEFAULT NULL,
  `brightness` int(11) DEFAULT NULL,
  `contrast` int(11) DEFAULT NULL,
  `grayscale` int(11) DEFAULT NULL,
  `hue-rotate` int(11) DEFAULT NULL,
  `invert` int(11) DEFAULT NULL,
  `opacity` int(11) DEFAULT NULL,
  `saturate` int(11) DEFAULT NULL,
  `sepia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.cover_styler: 2 rows
/*!40000 ALTER TABLE `cover_styler` DISABLE KEYS */;
INSERT INTO `cover_styler` (`id`, `b`, `q`, `pos-x`, `pos-y`, `blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `opacity`, `saturate`, `sepia`) VALUES
	(1, 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', NULL, NULL, 0, 100, 100, 0, 0, 0, 100, 100, 0),
	(2, '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', 50, 49, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `cover_styler` ENABLE KEYS */;

-- Dumping structure for table friends.event_info
CREATE TABLE IF NOT EXISTS `event_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key_link` longtext NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table friends.event_info: ~0 rows (approximately)
/*!40000 ALTER TABLE `event_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_info` ENABLE KEYS */;

-- Dumping structure for table friends.groups
CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_q` longtext NOT NULL,
  `group_b` longtext NOT NULL,
  `group_prof_pix` longtext NOT NULL,
  `date_start` datetime NOT NULL,
  `creater_q` longtext NOT NULL,
  `creater_b` longtext NOT NULL,
  `group_name` longtext NOT NULL,
  `private` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table friends.groups: 0 rows
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;

-- Dumping structure for table friends.group_members
CREATE TABLE IF NOT EXISTS `group_members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `q` longtext NOT NULL,
  `b` longtext NOT NULL,
  `admin` int(11) NOT NULL,
  `group_q` longtext NOT NULL,
  `group_b` longtext NOT NULL,
  `allowed` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table friends.group_members: 0 rows
/*!40000 ALTER TABLE `group_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_members` ENABLE KEYS */;

-- Dumping structure for table friends.img_back_grond
CREATE TABLE IF NOT EXISTS `img_back_grond` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` longtext NOT NULL,
  `color` longtext NOT NULL,
  `category` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.img_back_grond: ~32 rows (approximately)
/*!40000 ALTER TABLE `img_back_grond` DISABLE KEYS */;
INSERT INTO `img_back_grond` (`id`, `hash`, `color`, `category`) VALUES
	(1, '37c7c501f28a7f5f266d335a1c56a779', '#606060', 'post_times_blog'),
	(3, 'e82a494443aa2b8881ec56cd975dd250', '#505050', 'post_times_blog'),
	(4, '13e1f2ebc3eaef8d788e30736d141949', '#f0ffff', 'post_times_blog'),
	(5, '38348ce75d40317f8057694e0ae07794', '#000000', 'post_times_blog'),
	(6, '53b92c8c6968d607e224566a12b69533', '#d0c0c0', 'post_times_blog'),
	(7, '9b46e92f3b856ffef30c42697df7f493', '#7090c0', 'post_times_blog'),
	(8, '9381883b302b5200dd1005665d81cbeb', '#101010', 'post_times_blog'),
	(9, 'ac42e7979a822fcfd6deddc2a26a691c', '#505060', 'post_times_blog'),
	(12, '6dd6ce042677dbfe74300c068f9dddb7', '#d0c0c0', 'post_times_blog'),
	(13, '32be4a2b30aee43096025a33a6f1503c', '#80e0ff', 'music'),
	(14, '554e8ad0980e5f53ce0c1f97ed801b9d', '#101010', 'music'),
	(15, '68bca12f60c945b101fbc42619eed0f8', '#ffffff', 'music'),
	(16, '81a0d1bab69c0feaae4bd7b2c6521c37', '#000000', 'music'),
	(17, '4c96ecac7236f324c384463ba5a62a65', '#505060', 'prof_pix'),
	(18, '4c96ecac7236f324c384463ba5a62a65', '#d0c0c0', 'cover'),
	(22, '370106dbd365793f240e4f50414a413d', '#505050', 'post_times_blog'),
	(23, '770ff4a330358c77ba6423405c734a2c', '#606060', 'post_times_blog'),
	(24, '45ddd635871f5fe7ad9f7bba4899b793', '#202030', 'music'),
	(25, '8fea74d88440daaf9b05592ba8300911', '#b0c0e0', 'music'),
	(28, 'a2477be91e848d60bac6ffce72ce0d98', '#505050', 'dialogue_attach'),
	(29, '475f3b926eb5b9ce81a0c43603a97356', '#f0ffff', 'dialogue_attach'),
	(30, 'db9ee4024f65edbaea5ebcb02a4bbfc9', '#7090c0', 'dialogue_attach'),
	(31, '75ef2eecaf7584ee3e214ea61671825c', '#d0c0c0', 'dialogue_attach'),
	(32, 'addcdcf43dea9a1c76a26cb28b6ab59c', '#000000', 'prof_pix'),
	(33, 'addcdcf43dea9a1c76a26cb28b6ab59c', '#606060', 'cover'),
	(35, 'f8542bf6419dc931b3b4538c2c0a076f', '#203030', 'post_times_blog'),
	(36, '0a49499757d303b6d8c3c2f6dbfdae0f', '#603020', 'post_times_blog'),
	(37, 'ea015bcbb56f3a987274ef9c43ddba2f', '#b0a090', 'post_times_blog'),
	(38, 'c5146bad5ee8127946822b24315e26b4', '#504030', 'post_times_blog'),
	(39, 'fe422035d65be8bfb75085f5ce5b9494', '#203030', 'post_times_blog'),
	(40, 'afe20823dac191873f2f8feaa4410af6', '#b0a090', 'post_times_blog'),
	(41, '4ebe5b66e5f84db5718dc07c4b6b2f6d', '#603020', 'post_times_blog'),
	(42, '8f133236c62d28022bc1a69b1d702e53', '#504030', 'post_times_blog'),
	(43, 'b8604eab496de1a06fbb63d60f72f891', '#202010', 'post_times_blog'),
	(44, '7f0d13bf495ac2bbb239acd0fcb023ce', '#70a0d0', 'post_times_blog'),
	(45, 'd3f1eb889b00661a3d5cc77300b1c12f', '#202020', 'post_times_blog'),
	(46, 'a5902aea94fe8ba8fef4b7488de1646d', '#201010', 'post_times_blog'),
	(51, 'ed26971b925c8c6a6d0c80481a8d7a5c', '#202020', 'cover'),
	(52, 'ed26971b925c8c6a6d0c80481a8d7a5c', '#a08080', 'prof_pix');
/*!40000 ALTER TABLE `img_back_grond` ENABLE KEYS */;

-- Dumping structure for table friends.logins
CREATE TABLE IF NOT EXISTS `logins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `r` longtext NOT NULL,
  `g` longtext NOT NULL,
  `b` longtext NOT NULL,
  `q` longtext NOT NULL,
  `time` datetime NOT NULL,
  `device` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=597 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.logins: 591 rows
/*!40000 ALTER TABLE `logins` DISABLE KEYS */;
INSERT INTO `logins` (`id`, `r`, `g`, `b`, `q`, `time`, `device`) VALUES
	(1, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 00:13:32', 'computer'),
	(2, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 01:16:55', 'computer'),
	(3, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 02:48:57', 'computer'),
	(4, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 03:39:13', 'computer'),
	(5, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 05:19:02', 'computer'),
	(6, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 05:23:51', 'Android'),
	(7, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 05:25:05', 'computer'),
	(8, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 06:19:21', 'computer'),
	(9, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 06:27:34', 'computer'),
	(10, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 07:29:41', 'computer'),
	(11, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 07:40:49', 'computer'),
	(12, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 08:29:51', 'computer'),
	(13, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 08:41:02', 'computer'),
	(14, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 10:04:49', 'computer'),
	(15, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 10:05:12', 'Android'),
	(16, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 10:15:42', 'computer'),
	(17, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 10:49:10', 'Android'),
	(18, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 22:19:09', 'computer'),
	(19, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-07 05:37:21', 'computer'),
	(20, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-07 05:44:46', 'computer'),
	(21, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-07 05:44:58', 'computer'),
	(22, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-07 05:45:12', 'computer'),
	(23, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-07 06:04:46', 'computer'),
	(24, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-07 18:59:09', 'computer'),
	(25, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 19:34:04', 'computer'),
	(26, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 20:34:10', 'computer'),
	(27, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 20:38:45', 'Android'),
	(28, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 21:34:28', 'computer'),
	(29, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-07 21:36:14', 'Android'),
	(30, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-07 21:51:21', 'computer'),
	(31, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 21:52:18', 'computer'),
	(32, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 22:34:26', 'computer'),
	(33, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 22:57:29', 'computer'),
	(34, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 22:59:20', 'computer'),
	(35, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 22:59:33', 'computer'),
	(36, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-07 23:00:22', 'computer'),
	(37, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-08 00:01:00', 'computer'),
	(38, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-08 00:37:55', 'Android'),
	(39, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-08 00:39:52', 'computer'),
	(40, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-08 00:42:05', 'Android'),
	(41, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-08 01:43:17', 'computer'),
	(42, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-08 03:08:46', 'computer'),
	(43, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-08 05:44:36', 'computer'),
	(44, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 05:24:40', 'computer'),
	(45, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 06:34:33', 'computer'),
	(46, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 06:40:57', 'Android'),
	(47, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 07:06:45', 'computer'),
	(48, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 07:07:08', 'computer'),
	(49, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 19:49:49', 'computer'),
	(50, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 20:49:52', 'computer'),
	(51, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 21:49:55', 'computer'),
	(52, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 14:39:00', 'computer'),
	(53, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 16:52:13', 'computer'),
	(54, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 17:26:05', 'computer'),
	(55, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 18:13:43', 'computer'),
	(56, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-12 20:22:14', 'computer'),
	(57, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-13 18:56:01', 'computer'),
	(58, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-13 19:56:10', 'computer'),
	(59, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-13 23:07:08', 'Android'),
	(60, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 00:16:24', 'computer'),
	(61, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 01:09:25', 'computer'),
	(62, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 12:49:18', 'computer'),
	(63, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 13:58:20', 'computer'),
	(64, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 16:20:11', 'Android'),
	(65, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-14 16:55:30', 'computer'),
	(66, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 16:57:02', 'computer'),
	(67, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-14 17:00:44', 'computer'),
	(68, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 17:01:36', 'computer'),
	(69, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 17:12:32', 'computer'),
	(70, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 18:26:10', 'computer'),
	(71, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 18:27:35', 'Android'),
	(72, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 18:44:11', 'computer'),
	(73, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 22:41:45', 'computer'),
	(74, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-14 23:15:12', 'computer'),
	(75, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-14 23:31:36', 'computer'),
	(76, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 08:50:44', 'computer'),
	(77, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 09:51:22', 'computer'),
	(78, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 10:56:19', 'computer'),
	(79, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 13:31:09', 'computer'),
	(80, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 19:04:47', 'Android'),
	(81, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 22:07:21', 'computer'),
	(82, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:08:15', 'computer'),
	(83, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:42:20', 'computer'),
	(84, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:42:47', 'computer'),
	(85, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:43:15', 'computer'),
	(86, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:43:23', 'computer'),
	(87, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:43:30', 'computer'),
	(88, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:43:36', 'computer'),
	(89, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:43:41', 'computer'),
	(90, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:43:59', 'computer'),
	(91, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:44:08', 'computer'),
	(92, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:44:11', 'computer'),
	(93, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:44:23', 'computer'),
	(94, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:51:03', 'computer'),
	(95, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-15 23:54:57', 'computer'),
	(96, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 00:55:01', 'computer'),
	(97, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:13:38', 'computer'),
	(98, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:14:04', 'computer'),
	(99, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:15:26', 'computer'),
	(100, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:16:27', 'Android'),
	(101, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:22:44', 'Android'),
	(102, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:22:57', 'Android'),
	(103, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:33:45', 'Android'),
	(104, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:34:29', 'computer'),
	(105, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:34:40', 'Android'),
	(106, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:35:19', 'Android'),
	(107, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 02:35:53', 'Android'),
	(108, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 03:34:51', 'computer'),
	(109, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 03:36:05', 'Android'),
	(110, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 03:43:25', 'computer'),
	(111, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 05:13:21', 'computer'),
	(112, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 06:24:29', 'computer'),
	(113, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 11:16:18', 'computer'),
	(114, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 12:41:13', 'computer'),
	(115, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 17:14:33', 'computer'),
	(116, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 00:32:34', 'computer'),
	(117, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 00:40:20', 'computer'),
	(118, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 00:54:38', 'computer'),
	(119, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 00:54:56', 'computer'),
	(120, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 01:36:07', 'computer'),
	(121, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 01:47:57', 'computer'),
	(122, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 01:50:22', 'computer'),
	(123, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 01:51:05', 'computer'),
	(124, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 01:59:32', 'computer'),
	(125, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 13:32:10', 'computer'),
	(126, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 13:32:15', 'computer'),
	(127, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 13:46:46', 'computer'),
	(128, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 13:47:08', 'computer'),
	(129, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 13:47:39', 'computer'),
	(130, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 13:47:45', 'computer'),
	(131, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 14:02:45', 'computer'),
	(132, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:04:54', 'computer'),
	(133, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:12:18', 'computer'),
	(134, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:13:23', 'computer'),
	(135, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:20:18', 'computer'),
	(136, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:29:29', 'computer'),
	(137, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:30:36', 'computer'),
	(138, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:58:10', 'computer'),
	(139, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:58:25', 'computer'),
	(140, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:58:58', 'computer'),
	(141, '6ee6e363e613eab32711cb51b4746490', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '90d882af1f362a4b95235df22a4e79c5', '2021-09-17 14:59:05', 'computer'),
	(142, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 15:00:10', 'computer'),
	(143, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 15:00:44', 'computer'),
	(144, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 15:01:51', 'computer'),
	(145, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 15:03:37', 'computer'),
	(146, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 15:04:26', 'computer'),
	(147, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 15:25:18', 'computer'),
	(148, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 15:57:41', 'computer'),
	(149, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:07:04', 'computer'),
	(150, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:07:40', 'computer'),
	(151, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:08:03', 'computer'),
	(152, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:11:11', 'computer'),
	(153, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:11:53', 'computer'),
	(154, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 16:19:42', 'computer'),
	(155, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 16:20:42', 'computer'),
	(156, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:21:31', 'computer'),
	(157, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 16:23:19', 'computer'),
	(158, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 16:23:28', 'computer'),
	(159, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:38:06', 'computer'),
	(160, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:38:17', 'computer'),
	(161, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:38:37', 'computer'),
	(162, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:40:21', 'computer'),
	(163, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:40:33', 'computer'),
	(164, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 16:40:58', 'computer'),
	(165, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:07:04', 'computer'),
	(166, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:07:20', 'computer'),
	(167, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:07:48', 'computer'),
	(168, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 17:08:04', 'computer'),
	(169, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 17:08:19', 'computer'),
	(170, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 17:08:32', 'computer'),
	(171, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 17:08:52', 'computer'),
	(172, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-17 17:09:34', 'computer'),
	(173, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:16:36', 'computer'),
	(174, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:16:59', 'computer'),
	(175, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:17:27', 'computer'),
	(176, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:19:19', 'computer'),
	(177, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:19:34', 'computer'),
	(178, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 17:32:08', 'computer'),
	(179, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:04:21', 'computer'),
	(180, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:04:41', 'computer'),
	(181, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:05:01', ''),
	(182, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:05:15', 'computer'),
	(183, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:06:05', ''),
	(184, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:06:27', 'computer'),
	(185, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:12:15', 'computer'),
	(186, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:20:16', 'computer'),
	(187, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:20:34', ''),
	(188, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:20:43', 'computer'),
	(189, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:26:05', 'computer'),
	(190, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:26:10', 'computer'),
	(191, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:32:29', 'computer'),
	(192, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 18:39:17', 'computer'),
	(193, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:20:11', 'computer'),
	(194, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:20:16', 'computer'),
	(195, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:20:47', 'computer'),
	(196, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:23:21', 'computer'),
	(197, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:24:33', 'computer'),
	(198, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:27:31', 'computer'),
	(199, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:28:08', 'computer'),
	(200, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:28:42', 'computer'),
	(201, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:29:17', 'computer'),
	(202, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:31:13', 'computer'),
	(203, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:31:19', 'computer'),
	(204, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:31:34', 'computer'),
	(205, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:36:19', 'computer'),
	(206, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:36:28', 'computer'),
	(207, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:36:47', 'computer'),
	(208, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:37:56', 'computer'),
	(209, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:46:31', 'computer'),
	(210, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 19:53:06', 'computer'),
	(211, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-17 20:00:42', 'computer'),
	(212, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-18 03:16:58', 'computer'),
	(213, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-18 03:21:15', 'Android'),
	(214, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-18 03:21:34', 'computer'),
	(215, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-18 05:17:39', 'computer'),
	(216, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-18 05:19:27', 'computer'),
	(217, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-18 05:20:12', 'Android'),
	(218, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-18 05:25:58', 'computer'),
	(219, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-18 05:26:17', 'computer'),
	(220, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-19 00:46:59', 'computer'),
	(221, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-19 00:50:00', 'Android'),
	(222, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-19 00:50:46', 'Android'),
	(223, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-19 00:50:55', 'Android'),
	(224, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-19 00:51:35', 'Android'),
	(225, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-19 03:28:47', 'computer'),
	(226, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-19 03:31:54', 'computer'),
	(227, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-19 03:44:08', 'Android'),
	(228, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 02:07:16', 'computer'),
	(229, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 05:27:59', 'computer'),
	(230, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 05:34:05', 'Android'),
	(231, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 05:38:38', 'computer'),
	(232, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 05:41:32', 'computer'),
	(233, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 05:41:42', 'computer'),
	(234, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-20 06:09:33', 'computer'),
	(235, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-20 06:20:04', 'computer'),
	(236, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-20 06:20:42', 'computer'),
	(237, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-20 06:25:41', 'computer'),
	(238, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 06:26:21', 'computer'),
	(239, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 06:28:30', 'computer'),
	(240, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 09:38:59', 'computer'),
	(241, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 09:39:35', 'computer'),
	(242, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 10:21:59', 'computer'),
	(243, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 10:53:24', 'computer'),
	(244, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 13:30:52', 'computer'),
	(245, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 13:46:03', 'computer'),
	(246, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 13:48:02', 'computer'),
	(247, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 13:59:24', 'computer'),
	(248, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 14:13:55', 'computer'),
	(249, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 14:14:45', 'computer'),
	(250, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 14:16:19', 'computer'),
	(251, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 14:19:52', 'computer'),
	(252, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 14:20:10', 'computer'),
	(253, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 14:59:46', 'computer'),
	(254, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 15:00:22', 'computer'),
	(255, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 15:03:26', 'computer'),
	(256, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 15:08:40', 'computer'),
	(257, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 15:19:01', 'computer'),
	(258, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 15:19:11', 'computer'),
	(259, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 15:28:58', 'computer'),
	(260, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 15:29:09', 'computer'),
	(261, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 20:21:31', 'computer'),
	(262, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 06:03:58', 'computer'),
	(263, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 06:04:05', 'computer'),
	(264, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 07:12:28', 'computer'),
	(265, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 07:44:14', 'computer'),
	(266, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 07:48:45', 'computer'),
	(267, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 07:51:20', 'computer'),
	(268, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 07:52:10', 'computer'),
	(269, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 07:54:03', 'computer'),
	(270, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 07:54:41', 'computer'),
	(271, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 07:57:47', 'computer'),
	(272, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 08:00:23', 'computer'),
	(273, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 08:01:52', 'computer'),
	(274, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 08:03:40', 'computer'),
	(275, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 08:05:19', 'computer'),
	(276, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:05:51', 'computer'),
	(277, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:06:58', 'computer'),
	(278, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 08:07:31', 'computer'),
	(279, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 08:07:44', 'computer'),
	(280, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 08:07:58', 'computer'),
	(281, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:09:19', 'computer'),
	(282, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:16:23', 'computer'),
	(283, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:16:43', 'computer'),
	(284, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:16:53', 'computer'),
	(285, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:17:33', 'computer'),
	(286, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:18:10', 'computer'),
	(287, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:25:06', 'computer'),
	(288, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:27:00', 'computer'),
	(289, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:30:44', 'computer'),
	(290, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:30:44', 'computer'),
	(291, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:30:50', 'computer'),
	(292, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:31:28', 'computer'),
	(293, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:36:47', 'computer'),
	(294, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 08:38:43', 'computer'),
	(295, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 17:20:12', 'computer'),
	(296, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:24:07', 'computer'),
	(297, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:24:38', 'computer'),
	(298, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:25:35', 'computer'),
	(299, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:26:12', 'computer'),
	(300, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:26:26', 'computer'),
	(301, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:26:30', 'computer'),
	(302, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:27:01', 'computer'),
	(303, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:27:08', 'computer'),
	(304, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:27:58', 'computer'),
	(305, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:36:49', 'computer'),
	(306, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 17:57:40', 'computer'),
	(307, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:22:19', 'computer'),
	(308, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:22:30', 'computer'),
	(309, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:23:13', 'computer'),
	(310, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:25:44', 'computer'),
	(311, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:27:26', 'computer'),
	(312, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:31:00', 'computer'),
	(313, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:31:41', 'computer'),
	(314, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:32:19', 'computer'),
	(315, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:32:57', 'computer'),
	(316, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:43:13', 'computer'),
	(317, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:44:13', 'computer'),
	(318, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 18:44:30', 'computer'),
	(319, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 21:02:54', 'computer'),
	(320, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 21:06:03', 'computer'),
	(321, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 21:07:37', 'computer'),
	(322, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 21:09:39', 'computer'),
	(323, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 21:20:23', 'computer'),
	(324, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 21:22:14', 'computer'),
	(325, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 21:31:30', 'computer'),
	(326, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 21:37:40', 'computer'),
	(327, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 21:42:03', 'computer'),
	(328, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 21:56:26', 'computer'),
	(329, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 22:10:49', 'Android'),
	(330, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-21 22:52:44', 'computer'),
	(331, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 23:12:55', 'computer'),
	(332, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 23:13:57', 'computer'),
	(333, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-21 23:15:55', 'computer'),
	(334, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 07:08:50', 'computer'),
	(335, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 07:12:34', 'computer'),
	(336, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 07:23:21', 'computer'),
	(337, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 11:50:49', 'computer'),
	(338, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 11:50:58', 'computer'),
	(339, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:01:52', 'computer'),
	(340, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:06:28', 'computer'),
	(341, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:08:24', 'computer'),
	(342, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:10:55', 'computer'),
	(343, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:35:19', 'computer'),
	(344, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:36:13', 'computer'),
	(345, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:36:37', 'computer'),
	(346, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:37:17', 'computer'),
	(347, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:39:24', 'computer'),
	(348, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:39:43', 'computer'),
	(349, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:41:38', 'computer'),
	(350, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:41:52', 'computer'),
	(351, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:42:57', 'computer'),
	(352, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:43:30', 'computer'),
	(353, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:44:25', 'computer'),
	(354, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:45:01', 'computer'),
	(355, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 12:48:52', 'computer'),
	(356, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 13:48:52', 'computer'),
	(357, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:23:30', 'computer'),
	(358, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:23:42', 'computer'),
	(359, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:27:14', 'computer'),
	(360, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:27:49', 'computer'),
	(361, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:35:54', 'computer'),
	(362, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:37:28', 'computer'),
	(363, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:39:31', 'computer'),
	(364, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:39:40', 'computer'),
	(365, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:47:54', 'computer'),
	(366, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:49:16', 'computer'),
	(367, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:55:37', 'computer'),
	(368, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:57:30', 'computer'),
	(369, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 14:57:42', 'computer'),
	(370, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 21:48:11', 'computer'),
	(371, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 22:13:48', 'computer'),
	(372, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 22:14:53', 'computer'),
	(373, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 22:17:32', 'computer'),
	(374, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 22:20:38', 'computer'),
	(375, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 22:24:41', 'computer'),
	(376, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 22:25:45', 'computer'),
	(377, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 22:44:34', 'computer'),
	(378, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 22:53:49', 'computer'),
	(379, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-22 23:01:10', 'computer'),
	(380, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-22 23:05:31', 'computer'),
	(381, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '63af7da6c6cae7fbd8618d45b493a67e', '2021-09-22 23:09:42', 'computer'),
	(382, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:09:57', 'computer'),
	(383, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:11:26', 'Android'),
	(384, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:13:46', 'computer'),
	(385, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:21:08', 'computer'),
	(386, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:24:56', 'computer'),
	(387, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:25:57', 'Android'),
	(388, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:38:58', 'computer'),
	(389, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:39:56', 'computer'),
	(390, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:42:46', 'Android'),
	(391, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:44:06', 'computer'),
	(392, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:54:10', 'computer'),
	(393, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:55:54', 'Android'),
	(394, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:58:48', 'Android'),
	(395, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:59:20', 'Android'),
	(396, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-22 23:59:53', 'computer'),
	(397, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 00:00:10', 'computer'),
	(398, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 00:05:55', 'computer'),
	(399, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 00:06:17', 'computer'),
	(400, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 00:06:37', 'computer'),
	(401, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 00:06:55', 'computer'),
	(402, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 00:07:09', 'computer'),
	(403, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 12:50:49', 'computer'),
	(404, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 12:52:47', 'computer'),
	(405, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 12:54:54', 'computer'),
	(406, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 12:56:03', 'computer'),
	(407, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 15:24:49', 'computer'),
	(408, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 15:26:42', 'Android'),
	(409, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 22:26:37', 'computer'),
	(410, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-23 22:30:56', 'Android'),
	(411, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-23 22:38:40', 'computer'),
	(412, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 23:27:10', 'computer'),
	(413, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-23 23:27:22', 'computer'),
	(414, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 23:29:01', 'Android'),
	(415, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-24 05:51:14', 'computer'),
	(416, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 05:51:40', 'computer'),
	(417, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 05:53:58', 'Android'),
	(418, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 05:57:12', 'computer'),
	(419, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 06:07:28', 'computer'),
	(420, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 06:31:49', 'computer'),
	(421, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 06:33:07', 'computer'),
	(422, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 06:33:21', 'computer'),
	(423, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 06:33:40', 'computer'),
	(424, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 06:45:28', 'computer'),
	(425, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 15:42:08', 'computer'),
	(426, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 15:52:42', 'Android'),
	(427, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 15:53:13', 'Android'),
	(428, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 16:07:27', 'computer'),
	(429, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 17:53:28', 'computer'),
	(430, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 19:00:09', 'computer'),
	(431, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 19:03:05', 'computer'),
	(432, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 19:07:31', 'Android'),
	(433, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 19:49:02', 'Android'),
	(434, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 19:49:03', 'Android'),
	(435, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 19:49:19', 'Android'),
	(436, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-24 20:00:15', 'computer'),
	(437, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-25 01:34:15', 'computer'),
	(438, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-25 02:07:16', 'Android'),
	(439, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-25 02:31:10', 'Android'),
	(440, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-25 17:34:40', 'computer'),
	(441, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-25 19:27:17', 'computer'),
	(442, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-26 07:25:12', 'computer'),
	(443, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-26 17:18:05', 'computer'),
	(444, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-26 17:20:17', 'computer'),
	(445, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-26 19:16:27', 'computer'),
	(446, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-26 20:17:55', 'computer'),
	(447, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-27 04:45:43', 'computer'),
	(448, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-27 04:46:00', 'computer'),
	(449, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-27 05:47:20', 'computer'),
	(450, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-27 06:40:15', 'Android'),
	(451, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-27 06:47:32', 'computer'),
	(452, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-27 06:51:24', 'Android'),
	(453, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-27 15:19:36', 'computer'),
	(454, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-27 15:37:09', 'Android'),
	(455, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 18:30:09', 'computer'),
	(456, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 18:36:16', 'Android'),
	(457, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 19:05:35', 'computer'),
	(458, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 20:49:02', 'computer'),
	(459, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 20:52:58', 'Android'),
	(460, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 21:13:08', 'Android'),
	(461, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 21:56:39', 'computer'),
	(462, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:02:05', 'computer'),
	(463, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:02:51', 'computer'),
	(464, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:08:32', 'computer'),
	(465, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:12:36', 'computer'),
	(466, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:12:54', 'computer'),
	(467, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:13:23', 'computer'),
	(468, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:13:55', 'computer'),
	(469, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:20:07', 'Android'),
	(470, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-30 22:22:10', 'computer'),
	(471, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-01 13:55:56', 'computer'),
	(472, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-01 15:33:27', 'computer'),
	(473, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 11:51:11', 'computer'),
	(474, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 21:56:54', 'computer'),
	(475, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 21:57:27', 'computer'),
	(476, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 21:58:46', 'computer'),
	(477, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 22:27:27', 'computer'),
	(478, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 22:51:47', 'computer'),
	(479, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 22:56:05', 'computer'),
	(480, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 22:57:17', 'computer'),
	(481, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 22:58:24', 'computer'),
	(482, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 22:58:42', 'computer'),
	(483, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 23:15:47', 'computer'),
	(484, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 23:24:46', 'computer'),
	(485, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-02 23:36:05', 'computer'),
	(486, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:32:24', 'computer'),
	(487, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:33:22', 'computer'),
	(488, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:33:41', 'computer'),
	(489, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:34:14', 'computer'),
	(490, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:34:29', 'computer'),
	(491, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:35:53', 'computer'),
	(492, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:36:14', 'computer'),
	(493, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:37:43', 'computer'),
	(494, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:37:51', 'computer'),
	(495, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:38:03', 'computer'),
	(496, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:38:10', 'computer'),
	(497, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:38:21', 'computer'),
	(498, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 00:38:47', 'computer'),
	(499, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:35:46', 'computer'),
	(500, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:36:01', 'computer'),
	(501, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:36:26', 'computer'),
	(502, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:36:40', 'computer'),
	(503, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:36:56', 'computer'),
	(504, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:37:17', 'computer'),
	(505, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:37:41', 'computer'),
	(506, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:37:48', 'computer'),
	(507, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:38:22', 'computer'),
	(508, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:38:32', 'computer'),
	(509, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:41:50', 'computer'),
	(510, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:42:13', 'computer'),
	(511, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:43:35', 'computer'),
	(512, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:43:42', 'computer'),
	(513, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:44:30', 'computer'),
	(514, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 01:45:27', 'computer'),
	(515, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:01:15', 'computer'),
	(516, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:01:51', 'computer'),
	(517, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:04:46', 'computer'),
	(518, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:10:01', 'computer'),
	(519, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:10:49', 'computer'),
	(520, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:19:00', 'computer'),
	(521, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:19:14', 'computer'),
	(522, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:20:04', 'computer'),
	(523, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:21:56', 'computer'),
	(524, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:22:04', 'computer'),
	(525, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:22:19', 'computer'),
	(526, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:22:30', 'computer'),
	(527, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:22:48', 'computer'),
	(528, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-03 02:22:57', 'computer'),
	(529, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-04 18:24:47', 'computer'),
	(530, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 03:21:41', 'computer'),
	(531, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 03:22:27', 'computer'),
	(532, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 03:25:26', 'computer'),
	(533, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 04:38:59', 'computer'),
	(534, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 04:45:56', 'computer'),
	(535, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 05:10:41', 'computer'),
	(536, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 05:32:35', 'computer'),
	(537, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 05:46:59', 'computer'),
	(538, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 05:55:38', 'computer'),
	(539, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 05:55:45', 'computer'),
	(540, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:34:03', 'computer'),
	(541, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:34:40', 'computer'),
	(542, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:35:02', 'computer'),
	(543, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-05 19:35:28', 'computer'),
	(544, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-05 19:36:37', 'computer'),
	(545, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-05 19:36:54', 'computer'),
	(546, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-05 19:37:43', 'computer'),
	(547, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:38:20', 'computer'),
	(548, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:39:29', 'computer'),
	(549, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:39:45', 'computer'),
	(550, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:39:54', 'computer'),
	(551, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:40:11', 'computer'),
	(552, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:40:32', 'computer'),
	(553, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:40:49', 'computer'),
	(554, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-05 19:41:18', 'computer'),
	(555, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:44:48', 'computer'),
	(556, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:45:44', 'computer'),
	(557, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-05 19:45:59', 'computer'),
	(558, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-05 19:46:23', 'computer'),
	(559, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:15:28', 'computer'),
	(560, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:15:55', 'computer'),
	(561, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:26:28', 'computer'),
	(562, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:28:26', 'computer'),
	(563, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:28:32', 'computer'),
	(564, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:28:44', 'computer'),
	(565, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:28:53', 'computer'),
	(566, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:29:19', 'computer'),
	(567, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 02:49:49', 'computer'),
	(568, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 03:36:59', 'computer'),
	(569, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 03:37:28', 'computer'),
	(570, 'ae1deb40d2480b4afeff58cd175439fd', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-10-06 03:51:37', 'computer'),
	(571, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 04:17:21', 'computer'),
	(572, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 04:46:26', 'Android'),
	(573, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 04:47:51', 'computer'),
	(574, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 04:48:05', 'Android'),
	(575, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 04:48:39', 'computer'),
	(576, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 04:48:50', 'computer'),
	(577, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 04:49:28', 'Android'),
	(578, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 04:50:02', 'computer'),
	(579, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 06:23:31', 'computer'),
	(580, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 07:50:34', 'computer'),
	(581, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 18:10:33', 'computer'),
	(582, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 18:10:51', 'computer'),
	(583, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 18:15:09', 'computer'),
	(584, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 23:09:17', 'computer'),
	(585, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-06 23:10:03', 'computer'),
	(586, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-07 00:32:29', 'computer'),
	(587, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-07 08:03:30', 'computer'),
	(588, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-07 09:55:08', 'computer'),
	(589, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-07 12:40:23', 'computer'),
	(590, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-07 22:44:01', 'computer'),
	(591, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-08 04:25:55', 'computer'),
	(592, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-08 05:38:22', 'Android'),
	(593, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-08 05:43:23', 'computer'),
	(594, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-08 06:04:44', 'computer'),
	(595, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-08 06:08:03', 'computer'),
	(596, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-10-08 06:08:56', 'Android');
/*!40000 ALTER TABLE `logins` ENABLE KEYS */;

-- Dumping structure for table friends.media_styler
CREATE TABLE IF NOT EXISTS `media_styler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `media_key` longtext NOT NULL,
  `media_types` longtext NOT NULL,
  `blur` int(11) DEFAULT NULL,
  `brightness` int(11) DEFAULT NULL,
  `contrast` int(11) DEFAULT NULL,
  `grayscale` int(11) DEFAULT NULL,
  `hue-rotate` int(11) DEFAULT NULL,
  `invert` int(11) DEFAULT NULL,
  `opacity` int(11) DEFAULT NULL,
  `saturate` int(11) DEFAULT NULL,
  `sepia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.media_styler: 0 rows
/*!40000 ALTER TABLE `media_styler` DISABLE KEYS */;
/*!40000 ALTER TABLE `media_styler` ENABLE KEYS */;

-- Dumping structure for table friends.music_chat
CREATE TABLE IF NOT EXISTS `music_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `b` longtext NOT NULL,
  `_b` longtext NOT NULL,
  `changer_q` longtext NOT NULL,
  `music_hash` longtext NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.music_chat: 0 rows
/*!40000 ALTER TABLE `music_chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `music_chat` ENABLE KEYS */;

-- Dumping structure for table friends.music_favourite
CREATE TABLE IF NOT EXISTS `music_favourite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `favour_g` longtext NOT NULL,
  `favour_b` longtext NOT NULL,
  `hash` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.music_favourite: 0 rows
/*!40000 ALTER TABLE `music_favourite` DISABLE KEYS */;
/*!40000 ALTER TABLE `music_favourite` ENABLE KEYS */;

-- Dumping structure for table friends.music_listening
CREATE TABLE IF NOT EXISTS `music_listening` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lisner_g` longtext NOT NULL,
  `lisner_b` longtext NOT NULL,
  `music_key` longtext NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.music_listening: 10 rows
/*!40000 ALTER TABLE `music_listening` DISABLE KEYS */;
INSERT INTO `music_listening` (`id`, `lisner_g`, `lisner_b`, `music_key`, `date`) VALUES
	(1, 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '32be4a2b30aee43096025a33a6f1503c', '2021-09-16 01:24:52'),
	(2, 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '554e8ad0980e5f53ce0c1f97ed801b9d', '2021-09-21 22:13:35'),
	(3, '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '68bca12f60c945b101fbc42619eed0f8', '2021-09-08 00:27:40'),
	(4, '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '81a0d1bab69c0feaae4bd7b2c6521c37', '2021-09-08 00:31:21'),
	(5, 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '8fea74d88440daaf9b05592ba8300911', '2021-09-16 01:18:48'),
	(6, '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '8fea74d88440daaf9b05592ba8300911', '2021-09-14 16:55:43'),
	(7, '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '45ddd635871f5fe7ad9f7bba4899b793', '2021-09-14 16:56:16'),
	(8, 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '45ddd635871f5fe7ad9f7bba4899b793', '2021-09-20 06:40:58'),
	(9, 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '81a0d1bab69c0feaae4bd7b2c6521c37', '2021-09-21 22:02:21'),
	(10, 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '68bca12f60c945b101fbc42619eed0f8', '2021-09-21 22:18:01');
/*!40000 ALTER TABLE `music_listening` ENABLE KEYS */;

-- Dumping structure for table friends.music_playist
CREATE TABLE IF NOT EXISTS `music_playist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` longtext NOT NULL,
  `player_g` longtext NOT NULL,
  `player_b` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.music_playist: 0 rows
/*!40000 ALTER TABLE `music_playist` DISABLE KEYS */;
/*!40000 ALTER TABLE `music_playist` ENABLE KEYS */;

-- Dumping structure for table friends.music_uploader
CREATE TABLE IF NOT EXISTS `music_uploader` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uploader_q` longtext NOT NULL,
  `uploader_g` longtext NOT NULL,
  `audio_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.music_uploader: ~4 rows (approximately)
/*!40000 ALTER TABLE `music_uploader` DISABLE KEYS */;
INSERT INTO `music_uploader` (`id`, `uploader_q`, `uploader_g`, `audio_key`) VALUES
	(1, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '68bca12f60c945b101fbc42619eed0f8'),
	(2, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '81a0d1bab69c0feaae4bd7b2c6521c37'),
	(3, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '45ddd635871f5fe7ad9f7bba4899b793'),
	(4, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '8fea74d88440daaf9b05592ba8300911');
/*!40000 ALTER TABLE `music_uploader` ENABLE KEYS */;

-- Dumping structure for table friends.new_messagers
CREATE TABLE IF NOT EXISTS `new_messagers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `q_sender` longtext NOT NULL,
  `b_sender` longtext NOT NULL,
  `chat_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table friends.new_messagers: 0 rows
/*!40000 ALTER TABLE `new_messagers` DISABLE KEYS */;
/*!40000 ALTER TABLE `new_messagers` ENABLE KEYS */;

-- Dumping structure for table friends.notify
CREATE TABLE IF NOT EXISTS `notify` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notifyer_q` longtext NOT NULL,
  `notifyer_g` longtext NOT NULL,
  `key_holder` longtext NOT NULL,
  `date` datetime NOT NULL,
  `category` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.notify: 51 rows
/*!40000 ALTER TABLE `notify` DISABLE KEYS */;
INSERT INTO `notify` (`id`, `notifyer_q`, `notifyer_g`, `key_holder`, `date`, `category`) VALUES
	(1, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '106bbca401fc25c1343dc40a01dc3d38', '2021-09-06 00:21:20', 'blog'),
	(2, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '0bfda1cbe39a846936804ac1cd9be7e3', '2021-09-06 00:32:05', 'post'),
	(3, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'bd49d3c5464d76be231a55f6887a5d9a', '2021-09-06 00:37:03', 'times'),
	(4, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'bd49d3c5464d76be231a55f6887a5d9a', '2021-09-06 00:37:21', 'post_viewed'),
	(5, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '0bfda1cbe39a846936804ac1cd9be7e3', '2021-09-06 00:52:23', 'post_viewed'),
	(6, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '106bbca401fc25c1343dc40a01dc3d38', '2021-09-06 01:20:20', 'post_viewed'),
	(7, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '32be4a2b30aee43096025a33a6f1503c', '2021-09-06 10:30:57', 'music'),
	(8, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '554e8ad0980e5f53ce0c1f97ed801b9d', '2021-09-06 10:45:50', 'music'),
	(9, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '32be4a2b30aee43096025a33a6f1503c', '2021-09-07 21:21:08', 'music'),
	(10, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '554e8ad0980e5f53ce0c1f97ed801b9d', '2021-09-07 21:23:12', 'music'),
	(11, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-10-06 04:13:06', 'profile_viewed'),
	(12, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', 'bd49d3c5464d76be231a55f6887a5d9a', '2021-09-07 22:07:41', 'post_viewed'),
	(13, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '68bca12f60c945b101fbc42619eed0f8', '2021-09-07 22:28:27', 'music'),
	(14, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', 'c93c8ebb3838ad915bc112c9e15b8e63', '2021-09-07 23:03:37', 'post'),
	(15, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '81a0d1bab69c0feaae4bd7b2c6521c37', '2021-09-08 00:20:42', 'music'),
	(16, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'c93c8ebb3838ad915bc112c9e15b8e63', '2021-09-08 01:06:29', 'post_viewed'),
	(19, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '4c96ecac7236f324c384463ba5a62a65', '2021-10-08 05:43:41', 'profile_viewed'),
	(21, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '68bca12f60c945b101fbc42619eed0f8', '2021-09-12 20:22:17', 'music'),
	(22, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '24c21cbb98049537e06baf81c865695e', '2021-09-14 14:18:40', 'post'),
	(23, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '24c21cbb98049537e06baf81c865695e', '2021-09-14 14:23:29', 'post_viewed'),
	(24, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '656ca1f2bea96b490c3bc0789c2e4d45', '2021-09-14 14:52:44', 'times'),
	(25, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '656ca1f2bea96b490c3bc0789c2e4d45', '2021-09-14 14:53:00', 'post_viewed'),
	(26, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '5aad2e1a70858d75fa01cbbb36843165', '2021-09-14 16:48:24', 'post'),
	(27, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '5aad2e1a70858d75fa01cbbb36843165', '2021-09-14 16:48:51', 'post_viewed'),
	(28, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '8fea74d88440daaf9b05592ba8300911', '2021-09-14 16:49:40', 'music'),
	(29, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '8fea74d88440daaf9b05592ba8300911', '2021-09-14 16:55:43', 'music'),
	(30, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '45ddd635871f5fe7ad9f7bba4899b793', '2021-09-14 16:56:13', 'music'),
	(31, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '45ddd635871f5fe7ad9f7bba4899b793', '2021-09-14 16:59:55', 'music'),
	(32, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'c20ac9c2a56f52af16e8b8458867c065', '2021-09-15 10:21:52', 'post'),
	(33, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'd773191630047b252d3aa68e13a22db5', '2021-09-15 10:21:59', 'times'),
	(34, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'fecf20c8a6ec69acc6c6d39e828b53ee', '2021-09-15 10:22:05', 'blog'),
	(35, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'c20ac9c2a56f52af16e8b8458867c065', '2021-09-15 10:42:57', 'post_viewed'),
	(36, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'd773191630047b252d3aa68e13a22db5', '2021-09-15 10:43:06', 'post_viewed'),
	(37, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'fecf20c8a6ec69acc6c6d39e828b53ee', '2021-09-15 23:59:31', 'post_viewed'),
	(38, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'd37e4b396e5a6f9f6a951bfbf8e7f367', '2021-09-16 01:28:00', 'post'),
	(39, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '433af5fa9814fa2fb63176c3e7072a20', '2021-09-16 01:31:36', 'post'),
	(40, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'd37e4b396e5a6f9f6a951bfbf8e7f367', '2021-09-16 01:32:04', 'post_viewed'),
	(41, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '81a0d1bab69c0feaae4bd7b2c6521c37', '2021-09-17 15:34:33', 'music'),
	(42, '63af7da6c6cae7fbd8618d45b493a67e', 'addcdcf43dea9a1c76a26cb28b6ab59c', '45ddd635871f5fe7ad9f7bba4899b793', '2021-09-21 18:27:10', 'music'),
	(43, '63af7da6c6cae7fbd8618d45b493a67e', 'addcdcf43dea9a1c76a26cb28b6ab59c', '4c96ecac7236f324c384463ba5a62a65', '2021-09-22 23:06:03', 'profile_viewed'),
	(44, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'aefabd9263cf2d21ee6110fb0f4beaeb', '2021-09-23 15:31:37', 'post'),
	(45, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'aefabd9263cf2d21ee6110fb0f4beaeb', '2021-09-23 15:37:28', 'post_viewed'),
	(46, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', 'afa3d737c4c0880eb326b0440f728eb5', '2021-09-23 22:33:14', 'post'),
	(47, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '4537bbc4d901b980a7016d05bf0c2cbf', '2021-09-23 22:36:59', 'blog'),
	(48, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '4537bbc4d901b980a7016d05bf0c2cbf', '2021-09-23 22:37:14', 'post_viewed'),
	(49, '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '4537bbc4d901b980a7016d05bf0c2cbf', '2021-09-23 22:39:00', 'post_viewed'),
	(50, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'afa3d737c4c0880eb326b0440f728eb5', '2021-09-23 22:39:37', 'post_viewed'),
	(51, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '7d3ad98be5d5f33cf1cf16390e908ac2', '2021-09-24 19:47:58', 'times'),
	(52, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '7d3ad98be5d5f33cf1cf16390e908ac2', '2021-09-24 19:48:47', 'post_viewed'),
	(53, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a2c0751e098f02ee23058bbdf951b91c', '2021-09-27 06:27:26', 'post'),
	(54, '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a2c0751e098f02ee23058bbdf951b91c', '2021-09-27 15:39:34', 'post_viewed');
/*!40000 ALTER TABLE `notify` ENABLE KEYS */;

-- Dumping structure for table friends.notify_seen
CREATE TABLE IF NOT EXISTS `notify_seen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seer_g` longtext NOT NULL,
  `seer_q` longtext NOT NULL,
  `key__` longtext NOT NULL,
  `date_notify` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.notify_seen: 27 rows
/*!40000 ALTER TABLE `notify_seen` DISABLE KEYS */;
INSERT INTO `notify_seen` (`id`, `seer_g`, `seer_q`, `key__`, `date_notify`) VALUES
	(1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'bd49d3c5464d76be231a55f6887a5d9a', '2021-10-06 04:46:57'),
	(2, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '0bfda1cbe39a846936804ac1cd9be7e3', '2021-09-14 01:06:24'),
	(3, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '106bbca401fc25c1343dc40a01dc3d38', '2021-10-01 13:59:25'),
	(4, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', 'bd49d3c5464d76be231a55f6887a5d9a', '2021-10-06 03:53:16'),
	(5, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '81a0d1bab69c0feaae4bd7b2c6521c37', '2021-09-21 22:02:06'),
	(6, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', '2021-10-08 05:40:19'),
	(7, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'c93c8ebb3838ad915bc112c9e15b8e63', '2021-09-20 06:44:38'),
	(8, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '24c21cbb98049537e06baf81c865695e', '2021-09-14 18:33:12'),
	(9, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '656ca1f2bea96b490c3bc0789c2e4d45', '2021-10-06 04:46:53'),
	(10, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '5aad2e1a70858d75fa01cbbb36843165', '2021-09-15 10:50:28'),
	(11, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '45ddd635871f5fe7ad9f7bba4899b793', '2021-10-08 05:40:19'),
	(12, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '8fea74d88440daaf9b05592ba8300911', '2021-09-22 23:40:37'),
	(13, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'c20ac9c2a56f52af16e8b8458867c065', '2021-09-15 10:42:57'),
	(14, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'd773191630047b252d3aa68e13a22db5', '2021-10-06 07:11:16'),
	(15, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'fecf20c8a6ec69acc6c6d39e828b53ee', '2021-09-15 23:59:50'),
	(16, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'd37e4b396e5a6f9f6a951bfbf8e7f367', '2021-09-21 22:02:06'),
	(17, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '433af5fa9814fa2fb63176c3e7072a20', '2021-09-21 22:02:06'),
	(18, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'aefabd9263cf2d21ee6110fb0f4beaeb', '2021-09-30 18:40:41'),
	(19, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '4537bbc4d901b980a7016d05bf0c2cbf', '2021-10-08 05:40:19'),
	(20, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', '4537bbc4d901b980a7016d05bf0c2cbf', '2021-09-23 23:27:32'),
	(21, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'afa3d737c4c0880eb326b0440f728eb5', '2021-10-08 05:40:19'),
	(22, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', 'afa3d737c4c0880eb326b0440f728eb5', '2021-09-23 23:24:41'),
	(23, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '2021-10-06 04:14:01'),
	(24, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', '45ddd635871f5fe7ad9f7bba4899b793', '2021-10-06 04:14:01'),
	(25, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '7d3ad98be5d5f33cf1cf16390e908ac2', '2021-10-08 05:40:49'),
	(26, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a2c0751e098f02ee23058bbdf951b91c', '2021-09-27 15:39:34'),
	(27, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', 'a2c0751e098f02ee23058bbdf951b91c', '2021-10-06 04:14:01');
/*!40000 ALTER TABLE `notify_seen` ENABLE KEYS */;

-- Dumping structure for table friends.oauth_allowed_sites
CREATE TABLE IF NOT EXISTS `oauth_allowed_sites` (
  `id` int(11) NOT NULL,
  `domain_name` longtext NOT NULL,
  `registered_date` longtext NOT NULL,
  `api_key` longtext NOT NULL,
  `admin` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table friends.oauth_allowed_sites: 0 rows
/*!40000 ALTER TABLE `oauth_allowed_sites` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_allowed_sites` ENABLE KEYS */;

-- Dumping structure for table friends.oauth_people
CREATE TABLE IF NOT EXISTS `oauth_people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `b` longtext NOT NULL,
  `r` longtext NOT NULL,
  `domain` longtext NOT NULL,
  `expires_date` datetime NOT NULL,
  `refresh_expires` datetime NOT NULL,
  `start_date` datetime NOT NULL,
  `logged_key` longtext NOT NULL,
  `refresh_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=622 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.oauth_people: ~13 rows (approximately)
/*!40000 ALTER TABLE `oauth_people` DISABLE KEYS */;
INSERT INTO `oauth_people` (`id`, `b`, `r`, `domain`, `expires_date`, `refresh_expires`, `start_date`, `logged_key`, `refresh_key`) VALUES
	(42, 'a27119e13be90d9867b96e03ad6259de', 'cb47a9066a5ec8ab2ee01b7d309db38b', 'eboes__.test', '2021-09-07 22:51:21', '2021-09-07 23:21:21', '2021-09-07 21:51:21', '4d1ba4a1aaf858a782930bd69c95d057', 'f91d79476b8ea55df83b001ae68475a7'),
	(43, '97d14b1c9f695e960fd7ccbb8ac725dd', 'ae1deb40d2480b4afeff58cd175439fd', 'eboes__.test', '2021-09-07 22:52:18', '2021-09-07 23:22:18', '2021-09-07 21:52:18', 'd506073a2985e61903a24160e0c88a65', '4045cee41168a64222f3960e703c5d0c'),
	(79, 'a27119e13be90d9867b96e03ad6259de', 'cb47a9066a5ec8ab2ee01b7d309db38b', 'localhost', '2021-09-14 19:26:10', '2021-09-14 19:56:10', '2021-09-14 18:26:10', '6e7bce789aff45bdbaa53b75cd3da829', 'b61083c66b1d450185d2cc56bc478980'),
	(149, 'dc018604aa6985f7b31db6b7e69adfb2', '6ee6e363e613eab32711cb51b4746490', 'f.test', '2021-09-17 15:59:05', '2021-09-17 16:29:05', '2021-09-17 14:59:05', '95f8438c6d235afa5f1c71ccb3ebe301', '8d010b9c86ecae92e24bf95a3bdfdadb'),
	(341, '58bc1ef590b89f22a4a0194722f3ffb4', '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'whir.test', '2021-09-21 23:52:44', '2021-09-22 00:22:44', '2021-09-21 22:52:44', 'b8c511d7e090fd2aeea5c2178743acbf', '866c6b075cb3fdf035ce0d11334470f4'),
	(392, '58bc1ef590b89f22a4a0194722f3ffb4', '0557a7e5f39ecc8d9fb2a5efcfd1acfe', 'f.test', '2021-09-23 00:09:42', '2021-09-23 00:39:42', '2021-09-22 23:09:42', '39ae460f9899871d656cdeee424c89fb', '9e7e8d4ade5446a4de2fa6f1f3cdbe84'),
	(394, 'a27119e13be90d9867b96e03ad6259de', 'cb47a9066a5ec8ab2ee01b7d309db38b', '127.0.0.1', '2021-09-23 00:11:26', '2021-09-23 00:41:26', '2021-09-22 23:11:26', '74982655bd8ab44d366bc1effafd8c87', '9f1bff18d2e51e2576836f049d5ea6dd'),
	(421, '97d14b1c9f695e960fd7ccbb8ac725dd', 'ae1deb40d2480b4afeff58cd175439fd', '192.168.43.37', '2021-09-23 23:30:56', '2021-09-24 00:00:56', '2021-09-23 22:30:56', '69a72d85d0e203b21dbea7416fdb988b', '6258b4ca6ab50304b54af199270a61a4'),
	(587, '97d14b1c9f695e960fd7ccbb8ac725dd', 'ae1deb40d2480b4afeff58cd175439fd', 'whir.test', '2021-10-06 04:37:28', '2021-10-06 05:07:28', '2021-10-06 03:37:28', '159ed4dc4741bcd14aa0a7f90e8c054e', 'f93c2ddf744d0bd8cb7780daceb23937'),
	(589, '97d14b1c9f695e960fd7ccbb8ac725dd', 'ae1deb40d2480b4afeff58cd175439fd', 'f.test', '2021-10-06 04:51:37', '2021-10-06 05:21:37', '2021-10-06 03:51:37', '79bf005f3f5b5d0837f9f70f0b097758', 'c04116b4f157e7f1963d17d249fc0e55'),
	(618, 'a27119e13be90d9867b96e03ad6259de', 'cb47a9066a5ec8ab2ee01b7d309db38b', 'f.test', '2021-10-08 06:43:23', '2021-10-08 07:13:23', '2021-10-08 05:43:23', '2888853127c5bee565b361a7aa5449a3', '3ca26a1c351a2827005351ace272d229'),
	(620, 'a27119e13be90d9867b96e03ad6259de', 'cb47a9066a5ec8ab2ee01b7d309db38b', 'whir.test', '2021-10-08 07:08:03', '2021-10-08 07:38:03', '2021-10-08 06:08:03', 'f1da924547e8f4669d98b4f183ec743f', '9142310dd5918d42207e8cae16dee5c1'),
	(621, 'a27119e13be90d9867b96e03ad6259de', 'cb47a9066a5ec8ab2ee01b7d309db38b', '192.168.43.37', '2021-10-08 07:08:56', '2021-10-08 07:38:56', '2021-10-08 06:08:56', '30fac750bb409b7274a66ccd61ff061e', 'ae196a8a6ae35c6f0e3aec9756140ea4');
/*!40000 ALTER TABLE `oauth_people` ENABLE KEYS */;

-- Dumping structure for table friends.online
CREATE TABLE IF NOT EXISTS `online` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `r` longtext NOT NULL,
  `b` longtext NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.online: 4 rows
/*!40000 ALTER TABLE `online` DISABLE KEYS */;
INSERT INTO `online` (`id`, `r`, `b`, `date`) VALUES
	(1, 'cb47a9066a5ec8ab2ee01b7d309db38b', 'a27119e13be90d9867b96e03ad6259de', '2021-10-08 06:20:20'),
	(2, 'ae1deb40d2480b4afeff58cd175439fd', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-10-06 04:17:11'),
	(3, '6ee6e363e613eab32711cb51b4746490', 'dc018604aa6985f7b31db6b7e69adfb2', '2021-09-17 14:59:05'),
	(4, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', '58bc1ef590b89f22a4a0194722f3ffb4', '2021-09-22 23:09:49');
/*!40000 ALTER TABLE `online` ENABLE KEYS */;

-- Dumping structure for table friends.post
CREATE TABLE IF NOT EXISTS `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` longtext,
  `keey` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.post: 33 rows
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`id`, `word`, `keey`) VALUES
	(1, '#actressÂ #publicfigure', '0bfda1cbe39a846936804ac1cd9be7e3'),
	(2, '#actressÂ #publicfigure', '0bfda1cbe39a846936804ac1cd9be7e3'),
	(3, '#footballÂ #beastÂ best footballer alive', '106bbca401fc25c1343dc40a01dc3d38'),
	(4, '#tieÂ #kekepalma', 'fecf20c8a6ec69acc6c6d39e828b53ee'),
	(5, 'Happy', 'ccb87fdca6fd3830a691915c046de633'),
	(6, '#actressÂ #publicfigure', 'bd49d3c5464d76be231a55f6887a5d9a'),
	(7, '@josh(com)gmail', '656ca1f2bea96b490c3bc0789c2e4d45'),
	(8, '#musicÂ rules the world', 'c93c8ebb3838ad915bc112c9e15b8e63'),
	(9, '#musicÂ rules the world', 'c93c8ebb3838ad915bc112c9e15b8e63'),
	(10, NULL, '109e2c1a7da4c16f5efcfe2c7586ebf8'),
	(11, 'Waw another cute pictures', 'afa3d737c4c0880eb326b0440f728eb5'),
	(12, 'I hate you', '54cef18e47dcc4d8d0882d93a390c306'),
	(13, 'Https://f.test/?means=profile&fr_user=@chi(com)gmail', 'd618cb6d83f54a1d1d4dec76f1bd1bc8'),
	(14, 'Omo', '24c21cbb98049537e06baf81c865695e'),
	(15, '#musicalexpectations', '5aad2e1a70858d75fa01cbbb36843165'),
	(16, '#tieÂ #kekepalma', 'd773191630047b252d3aa68e13a22db5'),
	(17, '#tieÂ #kekepalma', 'c20ac9c2a56f52af16e8b8458867c065'),
	(18, '@josh(com)gmailÂ is a fool', 'd37e4b396e5a6f9f6a951bfbf8e7f367'),
	(19, 'Lols @josh(com)gmailÂ is crazy man', '433af5fa9814fa2fb63176c3e7072a20'),
	(20, 'Lols @josh(com)gmailÂ is crazy man', '433af5fa9814fa2fb63176c3e7072a20'),
	(21, '#TGIFÂ @josh(com)gmail', 'aefabd9263cf2d21ee6110fb0f4beaeb'),
	(22, '@josh(com)gmailÂ see #newphotoÂ of Wizkid', '7d3ad98be5d5f33cf1cf16390e908ac2'),
	(23, 'Hmm another cute pix', '4537bbc4d901b980a7016d05bf0c2cbf'),
	(24, NULL, '4df4e9d532cdcefa6aafdb8ec887f0ba'),
	(25, NULL, '4df4e9d532cdcefa6aafdb8ec887f0ba'),
	(26, NULL, '6dfa042eccb41e6af1376512d4227695'),
	(27, NULL, 'bcf5aa222bf543fb4a5dcd7a037bbc26'),
	(28, NULL, 'bcf5aa222bf543fb4a5dcd7a037bbc26'),
	(29, '@josh(com)gmailÂ #newphotoÂ #loveÂ #happyÂ #awesomeÂ #loveÂ #godÂ #wonderÂ #wonderfulÂ #kingÂ #loyalty', 'a2c0751e098f02ee23058bbdf951b91c'),
	(30, NULL, '00019c7673df1315366c9577b3d37e7a'),
	(31, NULL, '3c91ca2e6434b33cbcae4c34f42525e2'),
	(32, NULL, '169149fb1b563d976ca63babf129865b'),
	(33, NULL, '48a27b6552028264ded54ebd92faba25');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

-- Dumping structure for table friends.post_audios
CREATE TABLE IF NOT EXISTS `post_audios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_key` longtext NOT NULL,
  `hash` longtext NOT NULL,
  `path` longtext NOT NULL,
  `audio_video_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.post_audios: 6 rows
/*!40000 ALTER TABLE `post_audios` DISABLE KEYS */;
INSERT INTO `post_audios` (`id`, `post_key`, `hash`, `path`, `audio_video_key`) VALUES
	(1, '0bfda1cbe39a846936804ac1cd9be7e3', '70946bc0b24b49d8c210d0e156bc7150', 'files/attached/3b433885b1493620980843dc45b306d7.mp3', '32be4a2b30aee43096025a33a6f1503c'),
	(2, '106bbca401fc25c1343dc40a01dc3d38', 'a613309ecfcf8bd679ff6ccbde8e7fd5', 'files/attached/47040b3ccf8019b9248ef5986a08abbf.mp3', '554e8ad0980e5f53ce0c1f97ed801b9d'),
	(3, 'c93c8ebb3838ad915bc112c9e15b8e63', '8d771da8aa5e108907e7bf330feb3732', 'files/attached/60b473ab14b9d1e3761061ddf8eba3e5.mp3', '68bca12f60c945b101fbc42619eed0f8'),
	(4, 'c93c8ebb3838ad915bc112c9e15b8e63', '6207c63a5c232e64ed8a4ccbaf4e29fc', 'files/attached/98aa8e25baf8243149fb4727e5e64f09.mp3', '81a0d1bab69c0feaae4bd7b2c6521c37'),
	(5, '5aad2e1a70858d75fa01cbbb36843165', '7a68e4529d2676ffbff9aafd2e5a9e15', 'files/attached/6f189433a8f546ae3d0d55f5462a9817.mp3', '45ddd635871f5fe7ad9f7bba4899b793'),
	(6, '5aad2e1a70858d75fa01cbbb36843165', '724251f93f44cc9ce170a5308da31355', 'files/attached/15461bea81300c383664379ddc505326.mp3', '8fea74d88440daaf9b05592ba8300911');
/*!40000 ALTER TABLE `post_audios` ENABLE KEYS */;

-- Dumping structure for table friends.post_images
CREATE TABLE IF NOT EXISTS `post_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` longtext NOT NULL,
  `path` longtext NOT NULL,
  `post_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.post_images: 23 rows
/*!40000 ALTER TABLE `post_images` DISABLE KEYS */;
INSERT INTO `post_images` (`id`, `hash`, `path`, `post_key`) VALUES
	(1, '37c7c501f28a7f5f266d335a1c56a779', 'files/attached/87e843fd115ed2897ff85d3cd929105e.jpg', '106bbca401fc25c1343dc40a01dc3d38'),
	(3, 'e82a494443aa2b8881ec56cd975dd250', 'files/attached/33e20f8f6dce85190d215c95381e7a20.jpg', '106bbca401fc25c1343dc40a01dc3d38'),
	(4, '13e1f2ebc3eaef8d788e30736d141949', 'files/attached/65f3186d3904b45a5248b71b0d46bc32.jfif', '0bfda1cbe39a846936804ac1cd9be7e3'),
	(5, '38348ce75d40317f8057694e0ae07794', 'files/attached/662e91900c5810813a1ce3945ac21681.jfif', '0bfda1cbe39a846936804ac1cd9be7e3'),
	(6, '53b92c8c6968d607e224566a12b69533', 'files/attached/b4ac61c56bdb501dd4ae98fff1f09170.jpg', '0bfda1cbe39a846936804ac1cd9be7e3'),
	(7, '9b46e92f3b856ffef30c42697df7f493', 'files/attached/017526a217371c6f972b2de4f771382f.jfif', 'bd49d3c5464d76be231a55f6887a5d9a'),
	(8, '9381883b302b5200dd1005665d81cbeb', 'files/attached/891ec96efb11282a1f47d38eccc2e16f.jpg', 'bd49d3c5464d76be231a55f6887a5d9a'),
	(9, 'ac42e7979a822fcfd6deddc2a26a691c', 'files/attached/386d359e3ec66ced41c44ebb9ce23614.jpg', 'bd49d3c5464d76be231a55f6887a5d9a'),
	(10, '6dd6ce042677dbfe74300c068f9dddb7', 'files/attached/f91fbec109584340e29c368c60916cbe.jpg', '106bbca401fc25c1343dc40a01dc3d38'),
	(17, '0a49499757d303b6d8c3c2f6dbfdae0f', 'files/attached/97fa24b2c7065b9ca31a39c4517464a6.jpg', 'afa3d737c4c0880eb326b0440f728eb5'),
	(16, 'f8542bf6419dc931b3b4538c2c0a076f', 'files/attached/0bd0fff6cb9e15d9f314a0b7cf23876b.jpg', 'afa3d737c4c0880eb326b0440f728eb5'),
	(14, '370106dbd365793f240e4f50414a413d', 'files/attached/084d2707218f0bea414ac823f8075cac.jpg', '656ca1f2bea96b490c3bc0789c2e4d45'),
	(15, '770ff4a330358c77ba6423405c734a2c', 'files/attached/bbc67b0a7d25db0cdba9136cd5583758.jpg', '656ca1f2bea96b490c3bc0789c2e4d45'),
	(18, 'ea015bcbb56f3a987274ef9c43ddba2f', 'files/attached/2c51df2ee7603f2853c764cd56bdf58e.jpg', 'afa3d737c4c0880eb326b0440f728eb5'),
	(19, 'c5146bad5ee8127946822b24315e26b4', 'files/attached/9503dd37d8d06f72e78da74deed3ed56.jpg', 'afa3d737c4c0880eb326b0440f728eb5'),
	(20, 'fe422035d65be8bfb75085f5ce5b9494', 'files/attached/41994f05c19bfa7f4ba0eb084d981926.jpg', '4537bbc4d901b980a7016d05bf0c2cbf'),
	(21, 'afe20823dac191873f2f8feaa4410af6', 'files/attached/175acdf5074f0495cead4ad940a7b09d.jpg', '4537bbc4d901b980a7016d05bf0c2cbf'),
	(22, '4ebe5b66e5f84db5718dc07c4b6b2f6d', 'files/attached/bc8802fadeb1a64acbe51cf801f4b9e4.jpg', '4537bbc4d901b980a7016d05bf0c2cbf'),
	(23, '8f133236c62d28022bc1a69b1d702e53', 'files/attached/35b38465e20127bbada71f71d354c8ac.jpg', '4537bbc4d901b980a7016d05bf0c2cbf'),
	(24, 'b8604eab496de1a06fbb63d60f72f891', 'files/attached/a898dfd806bc537a2df1581e15e45853.jpg', '7d3ad98be5d5f33cf1cf16390e908ac2'),
	(25, '7f0d13bf495ac2bbb239acd0fcb023ce', 'files/attached/0ebbe8388025cb05ec5a641f97b8d695.jpg', '7d3ad98be5d5f33cf1cf16390e908ac2'),
	(26, 'd3f1eb889b00661a3d5cc77300b1c12f', 'files/attached/28f81aef1110dca828afcf0c8c9f723d.jpg', '7d3ad98be5d5f33cf1cf16390e908ac2'),
	(27, 'a5902aea94fe8ba8fef4b7488de1646d', 'files/attached/04d7afeebc41f68ef484b67b6ea22ad1.jpg', '7d3ad98be5d5f33cf1cf16390e908ac2');
/*!40000 ALTER TABLE `post_images` ENABLE KEYS */;

-- Dumping structure for table friends.post_tags
CREATE TABLE IF NOT EXISTS `post_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_key` longtext NOT NULL,
  `tagged_r` longtext NOT NULL,
  `tagged_q` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.post_tags: 1 rows
/*!40000 ALTER TABLE `post_tags` DISABLE KEYS */;
INSERT INTO `post_tags` (`id`, `post_key`, `tagged_r`, `tagged_q`) VALUES
	(1, 'd37e4b396e5a6f9f6a951bfbf8e7f367', 'ae1deb40d2480b4afeff58cd175439fd', '3d664bd5b38f53c2ef3e437d2f9df6c3');
/*!40000 ALTER TABLE `post_tags` ENABLE KEYS */;

-- Dumping structure for table friends.post_videos
CREATE TABLE IF NOT EXISTS `post_videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_key` longtext NOT NULL,
  `hash` longtext NOT NULL,
  `path` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.post_videos: 2 rows
/*!40000 ALTER TABLE `post_videos` DISABLE KEYS */;
INSERT INTO `post_videos` (`id`, `post_key`, `hash`, `path`) VALUES
	(13, 'aefabd9263cf2d21ee6110fb0f4beaeb', 'd1c2642ae0abbb408ccb9b92853b81ac', 'files/attached/54f955ad458a9590fee667d6ef91d028.mp4'),
	(12, 'aefabd9263cf2d21ee6110fb0f4beaeb', '0b01be8d96bface8b1eb05d819136f53', 'files/attached/0d83f4af0ee9b91d3c3ebaf201dfa728.mp4');
/*!40000 ALTER TABLE `post_videos` ENABLE KEYS */;

-- Dumping structure for table friends.privacy
CREATE TABLE IF NOT EXISTS `privacy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` longtext NOT NULL,
  `category` longtext NOT NULL,
  `folks` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table friends.privacy: ~0 rows (approximately)
/*!40000 ALTER TABLE `privacy` DISABLE KEYS */;
/*!40000 ALTER TABLE `privacy` ENABLE KEYS */;

-- Dumping structure for table friends.prof_pics_styler
CREATE TABLE IF NOT EXISTS `prof_pics_styler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `b` longtext NOT NULL,
  `q` longtext NOT NULL,
  `blur` int(11) DEFAULT NULL,
  `brightness` int(11) DEFAULT NULL,
  `contrast` int(11) DEFAULT NULL,
  `grayscale` int(11) DEFAULT NULL,
  `hue-rotate` int(11) DEFAULT NULL,
  `invert` int(11) DEFAULT NULL,
  `opacity` int(11) DEFAULT NULL,
  `saturate` int(11) DEFAULT NULL,
  `sepia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.prof_pics_styler: 1 rows
/*!40000 ALTER TABLE `prof_pics_styler` DISABLE KEYS */;
INSERT INTO `prof_pics_styler` (`id`, `b`, `q`, `blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `opacity`, `saturate`, `sepia`) VALUES
	(1, 'a27119e13be90d9867b96e03ad6259de', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 0, 100, 100, 0, 0, 0, 100, 100, 0);
/*!40000 ALTER TABLE `prof_pics_styler` ENABLE KEYS */;

-- Dumping structure for table friends.react_post
CREATE TABLE IF NOT EXISTS `react_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key_link` longtext NOT NULL,
  `react` longtext NOT NULL,
  `reacter_r` longtext NOT NULL,
  `reacter_q` longtext NOT NULL,
  `date` datetime NOT NULL,
  `device` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.react_post: 8 rows
/*!40000 ALTER TABLE `react_post` DISABLE KEYS */;
INSERT INTO `react_post` (`id`, `key_link`, `react`, `reacter_r`, `reacter_q`, `date`, `device`) VALUES
	(6, '106bbca401fc25c1343dc40a01dc3d38', 'rate', 'cb47a9066a5ec8ab2ee01b7d309db38b', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 10:07:12', 'Android'),
	(2, '0bfda1cbe39a846936804ac1cd9be7e3', 'love', 'cb47a9066a5ec8ab2ee01b7d309db38b', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 08:31:48', 'computer'),
	(5, 'bd49d3c5464d76be231a55f6887a5d9a', 'rate', 'cb47a9066a5ec8ab2ee01b7d309db38b', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-06 08:38:54', 'computer'),
	(8, '433af5fa9814fa2fb63176c3e7072a20', 'love', 'cb47a9066a5ec8ab2ee01b7d309db38b', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-16 06:04:22', 'computer'),
	(10, 'c93c8ebb3838ad915bc112c9e15b8e63', 'like', 'cb47a9066a5ec8ab2ee01b7d309db38b', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-20 06:45:10', 'computer'),
	(11, 'afa3d737c4c0880eb326b0440f728eb5', 'love', 'ae1deb40d2480b4afeff58cd175439fd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '2021-09-23 22:34:45', 'Android'),
	(12, 'afa3d737c4c0880eb326b0440f728eb5', 'love', 'cb47a9066a5ec8ab2ee01b7d309db38b', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 22:34:48', 'computer'),
	(13, '4537bbc4d901b980a7016d05bf0c2cbf', 'love', 'cb47a9066a5ec8ab2ee01b7d309db38b', '62fd2c287ba0e6c8851ecaa1aaf5c30c', '2021-09-23 22:37:24', 'computer');
/*!40000 ALTER TABLE `react_post` ENABLE KEYS */;

-- Dumping structure for table friends.shows
CREATE TABLE IF NOT EXISTS `shows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` longtext NOT NULL,
  `owner_b` longtext NOT NULL,
  `key` longtext NOT NULL,
  `create_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table friends.shows: ~0 rows (approximately)
/*!40000 ALTER TABLE `shows` DISABLE KEYS */;
/*!40000 ALTER TABLE `shows` ENABLE KEYS */;

-- Dumping structure for table friends.timeline
CREATE TABLE IF NOT EXISTS `timeline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `key_link` longtext NOT NULL,
  `saved` int(11) NOT NULL,
  `poster_g` longtext NOT NULL,
  `poster_q` longtext NOT NULL,
  `device` longtext,
  `category` longtext NOT NULL,
  `tied` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.timeline: 26 rows
/*!40000 ALTER TABLE `timeline` DISABLE KEYS */;
INSERT INTO `timeline` (`id`, `date`, `key_link`, `saved`, `poster_g`, `poster_q`, `device`, `category`, `tied`) VALUES
	(1, '2021-09-06 00:32:05', '0bfda1cbe39a846936804ac1cd9be7e3', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'Android', 'post', ''),
	(4, '2021-09-06 00:21:20', '106bbca401fc25c1343dc40a01dc3d38', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'blog', ''),
	(5, '2021-09-15 10:22:05', 'fecf20c8a6ec69acc6c6d39e828b53ee', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'blog', 'bd49d3c5464d76be231a55f6887a5d9a'),
	(7, '2021-09-06 00:37:03', 'bd49d3c5464d76be231a55f6887a5d9a', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'times', ''),
	(8, '2021-09-14 14:52:44', '656ca1f2bea96b490c3bc0789c2e4d45', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'times', ''),
	(9, '2021-09-07 23:03:37', 'c93c8ebb3838ad915bc112c9e15b8e63', 1, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', 'computer', 'post', 'ed26971b925c8c6a6d0c80481a8d7a5c'),
	(11, NULL, '109e2c1a7da4c16f5efcfe2c7586ebf8', 0, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', NULL, 'event', ''),
	(12, '2021-09-23 22:33:14', 'afa3d737c4c0880eb326b0440f728eb5', 1, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', 'Android', 'post', ''),
	(16, '2021-09-14 16:48:24', '5aad2e1a70858d75fa01cbbb36843165', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'post', ''),
	(15, '2021-09-14 14:18:40', '24c21cbb98049537e06baf81c865695e', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'post', ''),
	(17, '2021-09-15 10:21:59', 'd773191630047b252d3aa68e13a22db5', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'times', 'bd49d3c5464d76be231a55f6887a5d9a'),
	(18, '2021-09-15 10:21:52', 'c20ac9c2a56f52af16e8b8458867c065', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'post', 'bd49d3c5464d76be231a55f6887a5d9a'),
	(19, '2021-09-16 01:28:00', 'd37e4b396e5a6f9f6a951bfbf8e7f367', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'post', '4c96ecac7236f324c384463ba5a62a65'),
	(20, '2021-09-16 01:31:36', '433af5fa9814fa2fb63176c3e7072a20', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'post', 'd37e4b396e5a6f9f6a951bfbf8e7f367'),
	(21, '2021-09-23 15:31:37', 'aefabd9263cf2d21ee6110fb0f4beaeb', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'Android', 'post', ''),
	(22, '2021-09-24 19:47:58', '7d3ad98be5d5f33cf1cf16390e908ac2', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'Android', 'times', ''),
	(23, '2021-09-23 22:36:59', '4537bbc4d901b980a7016d05bf0c2cbf', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'blog', ''),
	(32, NULL, '169149fb1b563d976ca63babf129865b', 0, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', NULL, 'times', ''),
	(25, NULL, '4df4e9d532cdcefa6aafdb8ec887f0ba', 0, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', NULL, 'poll', ''),
	(26, NULL, '4df4e9d532cdcefa6aafdb8ec887f0ba', 0, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', NULL, 'poll', ''),
	(27, NULL, '6dfa042eccb41e6af1376512d4227695', 0, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', NULL, 'event', ''),
	(28, NULL, 'bcf5aa222bf543fb4a5dcd7a037bbc26', 0, 'addcdcf43dea9a1c76a26cb28b6ab59c', '63af7da6c6cae7fbd8618d45b493a67e', NULL, 'post', ''),
	(29, '2021-09-27 06:27:26', 'a2c0751e098f02ee23058bbdf951b91c', 1, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'computer', 'post', ''),
	(30, NULL, '00019c7673df1315366c9577b3d37e7a', 0, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', NULL, 'post', ''),
	(31, NULL, '3c91ca2e6434b33cbcae4c34f42525e2', 0, '4c96ecac7236f324c384463ba5a62a65', '3d664bd5b38f53c2ef3e437d2f9df6c3', NULL, 'blog', ''),
	(33, NULL, '48a27b6552028264ded54ebd92faba25', 0, 'ed26971b925c8c6a6d0c80481a8d7a5c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', NULL, 'post', '');
/*!40000 ALTER TABLE `timeline` ENABLE KEYS */;

-- Dumping structure for table friends.topics
CREATE TABLE IF NOT EXISTS `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key_link` longtext NOT NULL,
  `word` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.topics: ~4 rows (approximately)
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` (`id`, `key_link`, `word`) VALUES
	(1, '106bbca401fc25c1343dc40a01dc3d38', 'Cristiano ronaldo'),
	(2, '0bfda1cbe39a846936804ac1cd9be7e3', 'Yara shahidi'),
	(3, 'bd49d3c5464d76be231a55f6887a5d9a', 'Keke palmer'),
	(4, 'c93c8ebb3838ad915bc112c9e15b8e63', 'MUSIC'),
	(5, 'd37e4b396e5a6f9f6a951bfbf8e7f367', 'I hate Josh');
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;

-- Dumping structure for table friends.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full` longtext NOT NULL,
  `username` longtext NOT NULL,
  `email` longtext NOT NULL,
  `hash` longtext NOT NULL,
  `act` int(11) NOT NULL,
  `reset_pass_key` longtext,
  `r` longtext NOT NULL,
  `q` longtext NOT NULL,
  `g` longtext NOT NULL,
  `b` longtext NOT NULL,
  `date` datetime NOT NULL,
  `prof_pix` longtext NOT NULL,
  `cover` longtext NOT NULL,
  `date_birth` date NOT NULL,
  `country` longtext,
  `state` longtext,
  `city` longtext,
  `LGA` longtext,
  `gender` longtext,
  `phone` longtext,
  `status` longtext,
  `theme` longtext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.users: 4 rows
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `full`, `username`, `email`, `hash`, `act`, `reset_pass_key`, `r`, `q`, `g`, `b`, `date`, `prof_pix`, `cover`, `date_birth`, `country`, `state`, `city`, `LGA`, `gender`, `phone`, `status`, `theme`) VALUES
	(1, 'Udekwe Chiazam', '@chi(com)gmail', 'chi@gmail.com', '$2y$10$OS3MP/JujNCctfRfShF62end0SQlW3m0gbI4s99YQc0LpndeC/xxK', 1, NULL, 'cb47a9066a5ec8ab2ee01b7d309db38b', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'ed26971b925c8c6a6d0c80481a8d7a5c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-06 00:12:22', 'files/images/c7d3928dbacc9deab1ab57e0bc4ee387.jpg', 'files/images/06f746fbcc1598dc57cde03c92cb2c99.jpg', '2001-03-27', 'Nigeria', 'Enugu', 'nsukka', 'uzo-uwani', 'male', '', 'love all yall text me at jochalazacub@gmail.com', 'pure'),
	(2, 'Joshua Udekwe', '@josh(com)gmail', 'josh@gmail.com', '$2y$10$Kx9RMZo72y/45/cuQgoSyeIE6hHhRb8YdoduO6RMUkNq6uWyDDzHW', 1, NULL, 'ae1deb40d2480b4afeff58cd175439fd', '3d664bd5b38f53c2ef3e437d2f9df6c3', '4c96ecac7236f324c384463ba5a62a65', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-09-07 19:33:55', 'files/images/654689d9c6a4f4fc27c9e94538df1e40.jpg', 'files/images/3b2ad53b0ac1365cc06f58cd54fd2856.jpg', '1999-01-07', 'Nigeria', 'Enugu', 'Nsukka', 'No 17 church road onuiyi', 'male', '', '', 'light'),
	(3, 'Emma Ozoko', '@emma(com)gmail', 'emma@gmail.com', '$2y$10$xnKap24kI/JAfiYPBMs/o.ua12/8frYQKodPvZQ94KhZEIFNug342', 1, NULL, '6ee6e363e613eab32711cb51b4746490', '90d882af1f362a4b95235df22a4e79c5', 'dcd8ab6100d4abab29388326bb04205c', 'dc018604aa6985f7b31db6b7e69adfb2', '2021-09-17 01:49:45', 'icons/landscape-photography-of-green-grass-field-1461027.jpg', 'icons/working-in-a-group-6224.jpg', '2001-02-28', 'Nigeria', 'Enugu', 'Nsukka', 'Ziks flat', 'male', NULL, NULL, 'pure'),
	(4, 'Uche Ukwueze', '@uche(com)gmail', 'uche@gmail.com', '$2y$10$vuqmWaxO12Xjnj/p73ZmRO1R27EJdkZsyX0gPu8SohgzVv9qbCc.u', 1, NULL, '0557a7e5f39ecc8d9fb2a5efcfd1acfe', '63af7da6c6cae7fbd8618d45b493a67e', 'addcdcf43dea9a1c76a26cb28b6ab59c', '58bc1ef590b89f22a4a0194722f3ffb4', '2021-09-17 14:59:45', 'files/images/0fcba092e7c217aad2d61272607c9393.jfif', 'files/images/8f15cd53a008b961778461e620b67450.jpg', '2000-01-28', 'Nigeria', 'Enugu', 'Nsukka', 'ziks flat', 'male', NULL, NULL, 'pure');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table friends.verify
CREATE TABLE IF NOT EXISTS `verify` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `b` longtext NOT NULL,
  `g` longtext NOT NULL,
  `verify_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.verify: 0 rows
/*!40000 ALTER TABLE `verify` DISABLE KEYS */;
/*!40000 ALTER TABLE `verify` ENABLE KEYS */;

-- Dumping structure for table friends.views_post
CREATE TABLE IF NOT EXISTS `views_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key_post` longtext NOT NULL,
  `q` longtext NOT NULL,
  `b` longtext NOT NULL,
  `date` datetime NOT NULL,
  `category` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

-- Dumping data for table friends.views_post: 35 rows
/*!40000 ALTER TABLE `views_post` DISABLE KEYS */;
INSERT INTO `views_post` (`id`, `key_post`, `q`, `b`, `date`, `category`) VALUES
	(1, 'bd49d3c5464d76be231a55f6887a5d9a', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-06 04:46:57', 'post_viewed'),
	(2, '0bfda1cbe39a846936804ac1cd9be7e3', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-14 01:06:24', 'post_viewed'),
	(3, '106bbca401fc25c1343dc40a01dc3d38', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-01 13:59:25', 'post_viewed'),
	(4, '32be4a2b30aee43096025a33a6f1503c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-16 01:24:52', 'music'),
	(5, '554e8ad0980e5f53ce0c1f97ed801b9d', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-03 01:37:06', 'music'),
	(6, '32be4a2b30aee43096025a33a6f1503c', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-09-08 00:36:14', 'music'),
	(7, '554e8ad0980e5f53ce0c1f97ed801b9d', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-09-23 23:22:46', 'music'),
	(8, 'ed26971b925c8c6a6d0c80481a8d7a5c', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-10-06 04:13:06', 'profile_viewed'),
	(9, 'bd49d3c5464d76be231a55f6887a5d9a', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-10-06 03:53:16', 'post_viewed'),
	(10, '68bca12f60c945b101fbc42619eed0f8', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-09-08 00:38:23', 'music'),
	(11, '81a0d1bab69c0feaae4bd7b2c6521c37', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-09-08 00:36:20', 'music'),
	(12, 'c93c8ebb3838ad915bc112c9e15b8e63', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-20 06:44:38', 'post_viewed'),
	(13, '4c96ecac7236f324c384463ba5a62a65', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-08 05:43:41', 'profile_viewed'),
	(14, '68bca12f60c945b101fbc42619eed0f8', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-21 22:18:01', 'music'),
	(15, '24c21cbb98049537e06baf81c865695e', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-14 18:33:12', 'post_viewed'),
	(16, '656ca1f2bea96b490c3bc0789c2e4d45', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-06 04:46:53', 'post_viewed'),
	(17, '5aad2e1a70858d75fa01cbbb36843165', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-15 10:50:28', 'post_viewed'),
	(18, '8fea74d88440daaf9b05592ba8300911', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-18 05:42:06', 'music'),
	(19, '8fea74d88440daaf9b05592ba8300911', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-10-05 19:41:20', 'music'),
	(20, '45ddd635871f5fe7ad9f7bba4899b793', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-09-14 16:56:16', 'music'),
	(21, '45ddd635871f5fe7ad9f7bba4899b793', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-20 09:41:48', 'music'),
	(22, 'c20ac9c2a56f52af16e8b8458867c065', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-15 10:42:57', 'post_viewed'),
	(23, 'd773191630047b252d3aa68e13a22db5', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-06 07:11:16', 'post_viewed'),
	(24, 'fecf20c8a6ec69acc6c6d39e828b53ee', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-15 23:59:50', 'post_viewed'),
	(25, 'd37e4b396e5a6f9f6a951bfbf8e7f367', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-16 02:32:13', 'post_viewed'),
	(26, 'food', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-08 05:41:00', 'dictionary'),
	(27, '81a0d1bab69c0feaae4bd7b2c6521c37', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-22 14:50:08', 'music'),
	(28, '45ddd635871f5fe7ad9f7bba4899b793', '63af7da6c6cae7fbd8618d45b493a67e', '58bc1ef590b89f22a4a0194722f3ffb4', '2021-09-22 23:09:13', 'music'),
	(29, '4c96ecac7236f324c384463ba5a62a65', '63af7da6c6cae7fbd8618d45b493a67e', '58bc1ef590b89f22a4a0194722f3ffb4', '2021-09-22 23:06:03', 'profile_viewed'),
	(30, 'aefabd9263cf2d21ee6110fb0f4beaeb', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-30 18:40:41', 'post_viewed'),
	(31, '4537bbc4d901b980a7016d05bf0c2cbf', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-26 19:54:27', 'post_viewed'),
	(32, '4537bbc4d901b980a7016d05bf0c2cbf', '3d664bd5b38f53c2ef3e437d2f9df6c3', '97d14b1c9f695e960fd7ccbb8ac725dd', '2021-09-23 23:27:32', 'post_viewed'),
	(33, 'afa3d737c4c0880eb326b0440f728eb5', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-27 05:31:14', 'post_viewed'),
	(34, '7d3ad98be5d5f33cf1cf16390e908ac2', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-10-08 05:40:48', 'post_viewed'),
	(35, 'a2c0751e098f02ee23058bbdf951b91c', '62fd2c287ba0e6c8851ecaa1aaf5c30c', 'a27119e13be90d9867b96e03ad6259de', '2021-09-27 15:39:33', 'post_viewed');
/*!40000 ALTER TABLE `views_post` ENABLE KEYS */;

-- Dumping structure for table friends.view_later
CREATE TABLE IF NOT EXISTS `view_later` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key_id` longtext NOT NULL,
  `category` longtext NOT NULL,
  `saver_r` longtext NOT NULL,
  `saver_q` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table friends.view_later: 0 rows
/*!40000 ALTER TABLE `view_later` DISABLE KEYS */;
/*!40000 ALTER TABLE `view_later` ENABLE KEYS */;

-- Dumping structure for table friends.voting_census
CREATE TABLE IF NOT EXISTS `voting_census` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voter_b` longtext NOT NULL,
  `voter_q` longtext NOT NULL,
  `key_link` longtext NOT NULL,
  `option_key` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table friends.voting_census: ~0 rows (approximately)
/*!40000 ALTER TABLE `voting_census` DISABLE KEYS */;
/*!40000 ALTER TABLE `voting_census` ENABLE KEYS */;

-- Dumping structure for table friends.voting_options
CREATE TABLE IF NOT EXISTS `voting_options` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key_link` longtext NOT NULL,
  `word` longtext NOT NULL,
  `option_key` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table friends.voting_options: ~0 rows (approximately)
/*!40000 ALTER TABLE `voting_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `voting_options` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
