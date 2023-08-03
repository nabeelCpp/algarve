-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2023 at 04:07 PM
-- Server version: 10.11.4-MariaDB-1:10.11.4+maria~ubu2204
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `2algarvecom2023`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(244) DEFAULT NULL,
  `email` varchar(244) NOT NULL,
  `password` varchar(244) NOT NULL,
  `first_name` varchar(244) NOT NULL,
  `last_name` varchar(244) DEFAULT NULL,
  `super` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` varchar(244) DEFAULT NULL,
  `updated_by` varchar(244) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `email`, `password`, `first_name`, `last_name`, `super`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 'algarve_admin', 'admin@algarve.com', '$2b$12$Lp5ss4pseSkKbCE8SeHoGuzJ6HfgEKgdrW8CE9fvkcrEB4yQq/PaW', 'Algarve', 'Administrator', 1, '2023-05-27 10:57:29', NULL, '1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `description` text NOT NULL,
  `video_link` varchar(1000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `image`, `description`, `video_link`, `created_at`, `updated_at`) VALUES
(27, 'Nabeel struggling ', '1690570190187-image_2023_07_28T11_06_44_707Z.png', '<p>Shoaib working Perfectly.</p>', 'https://www.youtube.com/embed/S4URi3wes2k&t=62s', '2023-07-28 18:49:49', NULL),
(28, 'Ultimate Parasailing Experience!', '1690576522136-image_2023_07_28T19_04_44_514Z.png', '<h2><strong>WELCOME TO ALGARVE EXPERIENCE </strong></h2><p><br></p><p><strong>\"Soaring High: Embarking on the Ultimate Parasailing Adventure!\"</strong></p><ol><li>Defying Gravity: Discover the Thrill of Parasailing and Soar Like a Bird!</li><li>Unleashing the Adventurer Within: How Parasailing Offers an Unforgettable Experience</li><li>Above and Beyond: Embrace the Serenity and Awe of a Bird\'s-Eye View</li><li>Safety First: What to Know Before You Take to the Skies in a Parasail</li><li>Choosing the Perfect Location: Top Destinations for Your Dream Parasailing Journey</li></ol><p><br></p><p><strong>\"The Art of Parasailing: A Delightful Dance with Wind and Water!\"</strong></p><ol><li>A Symphony of Elements: Understanding the Harmony of Wind, Water, and Flight</li><li>Up, Up, and Away! Mastering the Technique of Safe and Graceful Parasailing</li><li>The Rush of Freedom: How Parasailing Balances Excitement with Tranquility</li><li>Capturing Memories: Essential Tips for Taking Breathtaking Photos while Parasailing</li><li>Sunsets and Soaring: Unraveling the Magic of Evening Parasailing Adventures</li></ol><p><br></p><p><strong>\"Overcoming Heights: Conquering Fears on Your Parasailing Escapade!\"</strong></p><p><br></p><ol><li>Fearless Flyers: Embracing the Thrill and Overcoming Fear in Parasailing</li><li>From Anxiety to Euphoria: How Parasailing Helps Conquer Fear of Heights</li><li>Empowering Yourself: Building Confidence through the Ultimate Adventure</li><li>The Psychology of Fear: Understanding and Coping with Apprehensions in the Sky</li><li>An Unstoppable Spirit: Inspirational Stories of Individuals who Conquered their Fear through Parasailing</li></ol><p><br></p><p><strong>\"Romancing the Skies: Experience Love and Romance on a Parasailing Journey!\"</strong></p><ol><li>Love Takes Flight: A Romantic Guide to Sharing a Parasailing Experience for Couples</li><li>Together in the Clouds: Strengthening Bonds on a Tandem Parasailing Expedition</li><li>Love is in the Air: How Parasailing Creates Unforgettable Romantic Memories</li><li>Planning the Perfect Proposal: Propose with Panache on a Romantic Parasailing Adventure</li><li>Lovebirds\' Hideaway: Experiencing the World\'s Most Romantic Parasailing Destinations</li></ol><p><br></p><p><strong>\"The Ultimate Family Adventure: Parasailing Fun for All Ages!\"</strong></p><ol><li>A Family Affair: Bonding and Laughter on a Thrilling Parasailing Outing</li><li>Flying with the Flock: How Parasailing Creates Lasting Family Memories</li><li>Safety and Smiles: Ensuring a Child-Friendly Parasailing Experience</li><li>Generational Joyride: Grandparents, Parents, and Kids on a Fun-Filled Parasailing Trip</li><li>Family Adventure Bucket List: Why Parasailing Should Top Your Must-Do Activities</li></ol><p><br></p><p><br></p><p><br></p><p><br></p>', 'https://www.youtube.com/embed/d1DhBZVL5Pg', '2023-07-28 20:35:20', NULL),
(29, 'Ultimate Parasailing Experience!', '1690576827407-image_2023_07_28T19_04_44_514Z.png', '<h1><strong><u>WELCOME TO ALGARVE EXPERIENCE </u></strong></h1><p><br></p><p><strong>\"Soaring High: Embarking on the Ultimate Parasailing Adventure!\"</strong></p><ol><li>Defying Gravity: Discover the Thrill of Parasailing and Soar Like a Bird!</li><li>Unleashing the Adventurer Within: How Parasailing Offers an Unforgettable Experience</li><li>Above and Beyond: Embrace the Serenity and Awe of a Bird\'s-Eye View</li><li>Safety First: What to Know Before You Take to the Skies in a Parasail</li><li>Choosing the Perfect Location: Top Destinations for Your Dream Parasailing Journey</li></ol><p><br></p><p><strong>\"The Art of Parasailing: A Delightful Dance with Wind and Water!\"</strong></p><ol><li>A Symphony of Elements: Understanding the Harmony of Wind, Water, and Flight</li><li>Up, Up, and Away! Mastering the Technique of Safe and Graceful Parasailing</li><li>The Rush of Freedom: How Parasailing Balances Excitement with Tranquility</li><li>Capturing Memories: Essential Tips for Taking Breathtaking Photos while Parasailing</li><li>Sunsets and Soaring: Unraveling the Magic of Evening Parasailing Adventures</li></ol><p><br></p><p><strong>\"Overcoming Heights: Conquering Fears on Your Parasailing Escapade!\"</strong></p><p><br></p><ol><li>Fearless Flyers: Embracing the Thrill and Overcoming Fear in Parasailing</li><li>From Anxiety to Euphoria: How Parasailing Helps Conquer Fear of Heights</li><li>Empowering Yourself: Building Confidence through the Ultimate Adventure</li><li>The Psychology of Fear: Understanding and Coping with Apprehensions in the Sky</li><li>An Unstoppable Spirit: Inspirational Stories of Individuals who Conquered their Fear through Parasailing</li></ol><p><br></p><p><strong>\"Romancing the Skies: Experience Love and Romance on a Parasailing Journey!\"</strong></p><ol><li>Love Takes Flight: A Romantic Guide to Sharing a Parasailing Experience for Couples</li><li>Together in the Clouds: Strengthening Bonds on a Tandem Parasailing Expedition</li><li>Love is in the Air: How Parasailing Creates Unforgettable Romantic Memories</li><li>Planning the Perfect Proposal: Propose with Panache on a Romantic Parasailing Adventure</li><li>Lovebirds\' Hideaway: Experiencing the World\'s Most Romantic Parasailing Destinations</li></ol><p><br></p><p><strong>\"The Ultimate Family Adventure: Parasailing Fun for All Ages!\"</strong></p><ol><li>A Family Affair: Bonding and Laughter on a Thrilling Parasailing Outing</li><li>Flying with the Flock: How Parasailing Creates Lasting Family Memories</li><li>Safety and Smiles: Ensuring a Child-Friendly Parasailing Experience</li><li>Generational Joyride: Grandparents, Parents, and Kids on a Fun-Filled Parasailing Trip</li><li>Family Adventure Bucket List: Why Parasailing Should Top Your Must-Do Activities</li></ol><p><br></p><p><br></p><p><br></p><p><br></p>', 'https://www.youtube.com/embed/d1DhBZVL5Pg', '2023-07-28 20:40:26', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `BookingNumber` varchar(255) NOT NULL,
  `TicketNumber` varchar(255) NOT NULL,
  `PaxTotal` varchar(255) NOT NULL,
  `BillingTotal` float(11,2) DEFAULT NULL,
  `BookingOperatorCode` varchar(255) NOT NULL,
  `EventDate` varchar(255) NOT NULL,
  `CancelationPolicyDate` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1 COMMENT '1: confirmed\r\n0: cancelled',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `ListingId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `userId`, `BookingNumber`, `TicketNumber`, `PaxTotal`, `BillingTotal`, `BookingOperatorCode`, `EventDate`, `CancelationPolicyDate`, `status`, `created_at`, `ListingId`) VALUES
(1, 1, '340352', '53', '4', 140.00, 'ALG-yRb3Be9q', '2023-07-23T09:00:00.000+01:00', '2023-07-06T06:42:51.173+01:00', 1, '2023-07-05 17:42:53', 24),
(2, 1, '340355', '58', '3', 105.00, 'ALG-XgJ9ZMKL', '2023-07-23T09:00:00.000+01:00', '2023-07-07T02:19:43.929+01:00', 1, '2023-07-06 13:19:54', 24),
(3, 10, '340367', '71495', '2', 75.00, 'ALG-NEZU6JO3', '2023-07-19T12:00:00.000+01:00', '2023-07-10T08:19:56.938+01:00', 1, '2023-07-09 19:20:13', 24),
(4, 10, '340368', '71496', '2', 75.00, 'ALG-zj6GFamb', '2023-07-27T17:00:00.000+01:00', '2023-07-10T08:23:23.772+01:00', 1, '2023-07-09 19:23:26', 24),
(5, 10, '340374', '71502', '2', 65.00, 'ALG-uo6cA0Qc', '2023-07-13T12:00:00.000+01:00', '2023-07-10T10:45:58.277+01:00', 1, '2023-07-09 21:46:01', 24),
(6, 10, '340376', '71504', '2', 65.00, 'ALG-4SZN6tSq', '2023-07-12T14:30:00.000+01:00', '2023-07-10T10:48:59.713+01:00', 1, '2023-07-09 21:49:02', 24),
(7, 10, '340380', '18', '2', 90.00, 'ALG-OM4Y92Fm', '2023-07-31T14:00:00.000+01:00', '2023-07-15T03:18:38.039+01:00', 1, '2023-07-14 14:18:51', 24),
(8, 10, '340381', '19', '2', 90.00, 'ALG-ECsyDSbg', '2023-08-22T14:00:00.000+01:00', '2023-07-15T03:22:36.439+01:00', 1, '2023-07-14 14:22:37', 24),
(9, 10, '340382', '20', '2', 90.00, 'ALG-GD9XIjUJ', '2023-08-16T09:00:00.000+01:00', '2023-07-15T03:23:45.379+01:00', 1, '2023-07-14 14:23:46', 24),
(10, 10, '340395', '73', '2', 70.00, 'ALG-8ftCwu8s', '2023-07-22T09:00:00.000+01:00', '2023-07-22T05:56:07.258+01:00', 1, '2023-07-21 16:56:13', 24),
(11, 10, '340396', '74', '2', 70.00, 'ALG-8weo3su8', '2023-07-28T09:00:00.000+01:00', '2023-07-22T05:58:15.883+01:00', 1, '2023-07-21 16:58:17', 24),
(12, 10, '340397', '75', '2', 70.00, 'ALG-GhHbVroD', '2023-07-27T09:00:00.000+01:00', '2023-07-22T06:31:42.554+01:00', 1, '2023-07-21 17:31:43', 24),
(13, 10, '340398', '76', '2', 70.00, 'ALG-NdO2hs86', '2023-07-27T09:00:00.000+01:00', '2023-07-22T06:40:01.308+01:00', 1, '2023-07-21 17:40:03', 24),
(14, 10, '340399', '77', '2', 70.00, 'ALG-u5RnUj8N', '2023-07-28T09:00:00.000+01:00', '2023-07-22T07:08:51.924+01:00', 1, '2023-07-21 18:08:53', 24),
(15, 10, '340401', '79', '2', 70.00, 'ALG-5u3fZA0N', '2023-07-30T09:00:00.000+01:00', '2023-07-23T07:17:42.465+01:00', 1, '2023-07-22 18:17:49', 24),
(16, 10, '340402', '80', '2', 70.00, 'ALG-pfl2KJhe', '2023-07-30T09:00:00.000+01:00', '2023-07-23T07:19:50.491+01:00', 1, '2023-07-22 18:19:52', 24),
(17, 10, '340403', '81', '2', 70.00, 'ALG-7M3SN1N3', '2023-07-25T09:00:00.000+01:00', '2023-07-23T07:21:18.957+01:00', 1, '2023-07-22 18:21:20', 24),
(18, 10, '340408', '86', '2', 70.00, 'ALG-RQPsscbN', '2023-07-31T09:00:00.000+01:00', '2023-07-26T04:32:14.502+01:00', 1, '2023-07-25 15:32:18', 28),
(19, 10, '340409', '87', '2', 70.00, 'ALG-nxTOArPG', '2023-08-31T09:00:00.000+01:00', '2023-07-26T04:42:16.697+01:00', 1, '2023-07-25 15:42:19', 28),
(20, 10, '340410', '88', '2', 70.00, 'ALG-h4Mn5z7l', '2023-08-31T09:00:00.000+01:00', '2023-07-26T04:43:12.552+01:00', 1, '2023-07-25 15:43:13', 28),
(21, 10, '340413', '91', '2', 70.00, 'ALG-re24nREP', '2023-07-26T09:00:00.000+01:00', '2023-07-26T07:22:21.859+01:00', 0, '2023-07-25 18:22:24', 28),
(22, 10, '340414', '92', '2', 70.00, 'ALG-wjsnV9i1', '2023-08-29T09:00:00.000+01:00', '2023-07-26T08:15:10.572+01:00', 1, '2023-07-25 19:15:13', 28),
(23, 10, '340458', '112', '2', 70.00, 'ALG-80alcajG', '2023-07-31T09:00:00.000+01:00', '2023-07-29T23:57:44.541+01:00', 1, '2023-07-29 10:57:53', 52),
(24, 11, '340466', '120', '2', 70.00, 'ALG-rzNnqJHY', '2023-07-31T09:00:00.000+01:00', '2023-07-30T05:04:39.188+01:00', 1, '2023-07-29 16:04:50', 52),
(25, 11, '340467', '34', '2', 90.00, 'ALG-ghOgdNci', '2023-07-31T14:00:00.000+01:00', '2023-07-30T05:05:44.103+01:00', 1, '2023-07-29 16:05:46', 54),
(26, 11, '340471', '121', '2', 70.00, 'ALG-cOuUSGcU', '2023-07-31T09:00:00.000+01:00', '2023-07-30T05:36:04.161+01:00', 1, '2023-07-29 16:36:05', 52),
(27, 11, '340472', '122', '2', 70.00, 'ALG-0gmvPUkH', '2023-07-31T15:00:00.000+01:00', '2023-07-30T05:37:25.285+01:00', 1, '2023-07-29 16:37:27', 55),
(28, 11, '340475', '125', '2', 70.00, 'ALG-XIr9AcTT', '2023-07-31T15:00:00.000+01:00', '2023-07-30T05:45:28.782+01:00', 1, '2023-07-29 16:45:30', 55),
(29, 11, '340476', '126', '2', 70.00, 'ALG-HKPKkErt', '2023-08-22T09:00:00.000+01:00', '2023-07-30T05:46:38.095+01:00', 1, '2023-07-29 16:46:40', 52);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(144) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Attraction', '2023-06-13 16:31:10', NULL),
(2, 'luxury', '2023-07-05 23:02:37', NULL),
(3, 'Beach', '2023-07-26 18:48:52', NULL),
(4, 'Hotels ', '2023-07-28 20:28:14', NULL),
(5, 'Restaurants', '2023-07-28 20:28:33', NULL),
(6, 'Experiences ', '2023-07-28 20:28:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `city` varchar(144) NOT NULL,
  `lat` varchar(144) NOT NULL,
  `lon` varchar(144) NOT NULL,
  `country` varchar(144) NOT NULL,
  `iso2` varchar(44) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `city`, `lat`, `lon`, `country`, `iso2`) VALUES
(5, 'Portimão', '10', '20', 'India', NULL),
(7, 'Albufeira ', '8.2179876', '37.112139', 'Portugal', NULL),
(8, 'Lagos', '37.1', '-8.6667', 'Portugal', 'PT'),
(9, 'Albufeira', '37.0889', '-8.2511', 'Portugal', 'PT'),
(10, 'Faro', '37.0161', '-7.935', 'Portugal', 'PT'),
(11, 'Tavira', '37.1309', '-7.6506', 'Portugal', 'PT'),
(12, 'Portimão', '37.1333', '-8.5333', 'Portugal', 'PT'),
(13, 'Carvoeiro', '37.1', '-8.4667', 'Portugal', 'PT'),
(14, 'Olhão', '37.0278', '-7.8389', 'Portugal', 'PT'),
(15, 'Aljezur', '37.3178', '-8.8', 'Portugal', 'PT'),
(16, 'Armação de Pêra', '37.1', '-8.3667', 'Portugal', 'PT'),
(17, 'Silves', '37.1833', '-8.4333', 'Portugal', 'PT'),
(18, 'Vila Real de Santo António', '37.2', '-7.4167', 'Portugal', 'PT'),
(19, 'Monchique', '37.3167', '-8.6', 'Portugal', 'PT'),
(20, 'Loulé', '37.144', '-8.0235', 'Portugal', 'PT'),
(21, 'Castro Marim', '37.2167', '-7.45', 'Portugal', 'PT'),
(22, 'Lagoa', '37.1347', '-8.4528', 'Portugal', 'PT'),
(23, 'São Brás de Alportel', '37.15', '-7.8833', 'Portugal', 'PT');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us_queries`
--

CREATE TABLE `contact_us_queries` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(244) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '0: not-responded\r\n1: responded'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us_queries`
--

INSERT INTO `contact_us_queries` (`id`, `name`, `email`, `message`, `created_at`, `status`) VALUES
(1, 'M Nabeel Arshad', 'nabeel_arshad93@outlook.com', 'I have some query regarding your product,', '2023-07-30 16:06:47', 0);

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`id`, `name`, `created_at`, `updated_at`) VALUES
(2, ' fully furnished rooms', '2023-07-03 21:53:31', NULL),
(3, 'Free Wifi available', '2023-07-04 18:06:58', NULL),
(4, 'Air Conditioning', '2023-07-05 23:02:23', NULL),
(5, 'Transportation', '2023-07-26 18:18:51', NULL),
(6, 'Parking Area ', '2023-07-28 11:12:43', NULL),
(7, 'Play Ground ', '2023-07-28 11:12:56', NULL),
(8, 'Kitchen ', '2023-07-30 15:31:13', NULL),
(9, 'Ocean View ', '2023-07-30 15:31:20', NULL),
(10, 'Outdoor Space', '2023-07-30 15:32:16', NULL),
(11, 'Waterfront ', '2023-07-30 15:33:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `listing_id` int(11) NOT NULL,
  `image` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `listing_id`, `image`, `created_at`) VALUES
(3, 2, '1686586204331-17f161383828854220c7511b48a8b046.jpg', '2023-06-12 16:10:04'),
(4, 2, '1686586204349-781c24022be5aa2840ca66ebe5a07425.jpg', '2023-06-12 16:10:04'),
(5, 2, '1686844982818-12311.jpg', '2023-06-15 16:03:02'),
(6, 2, '1686844982835-781c24022be5aa2840ca66ebe5a07425.jpg', '2023-06-15 16:03:02'),
(7, 9, '1688383207406-2.PNG', '2023-07-03 11:20:07'),
(8, 9, '1688383207391-1.PNG', '2023-07-03 11:20:07'),
(9, 10, '1688384739058-1686844982818-12311.jpg', '2023-07-03 11:45:39'),
(10, 10, '1688384739064-1686844982835-781c24022be5aa2840ca66ebe5a07425.jpg', '2023-07-03 11:45:39'),
(11, 11, '1688410478270-download (1).jpg', '2023-07-03 18:54:38'),
(12, 11, '1688410478274-download.jpg', '2023-07-03 18:54:38'),
(13, 12, '1688412751413-download (1).jpg', '2023-07-03 19:32:31'),
(14, 12, '1688412751414-download.jpg', '2023-07-03 19:32:31'),
(15, 13, '1688418135174-download (1).jpg', '2023-07-03 21:02:15'),
(16, 14, '1688419351786-download.jpg', '2023-07-03 21:22:31'),
(17, 15, '1688419765463-download.jpg', '2023-07-03 21:29:25'),
(18, 16, '1688421332353-download.jpg', '2023-07-03 21:55:32'),
(19, 17, '1688422320441-download.jpg', '2023-07-03 22:12:00'),
(20, 18, '1688422754997-download.jpg', '2023-07-03 22:19:15'),
(21, 19, '1688494060937-download (1).jpg', '2023-07-04 18:07:40'),
(22, 19, '1688494060938-download.jpg', '2023-07-04 18:07:40'),
(23, 20, '1688495758693-download (1).jpg', '2023-07-04 18:35:58'),
(24, 20, '1688495758694-download.jpg', '2023-07-04 18:35:58'),
(25, 21, '1688508846828-download (1).jpg', '2023-07-04 22:14:06'),
(26, 21, '1688508846829-download.jpg', '2023-07-04 22:14:06'),
(27, 23, '1688596687152-220504_Virgin_NY_Model_Rooms_24038_1080x1350.jpg', '2023-07-05 22:38:07'),
(28, 24, '1688597637525-PLZ_1171407_Exterior_1080x1350.jpg', '2023-07-05 22:53:57'),
(29, 25, '1689283568434-220504_Virgin_NY_Model_Rooms_24038_1080x1350.jpg', '2023-07-13 21:26:09'),
(30, 26, '1689288476114-download.jpg', '2023-07-13 22:47:56'),
(31, 27, '1689344019326-PLZ_1171407_Exterior_1080x1350.jpg', '2023-07-14 14:13:41'),
(32, 28, '1689888631811-download (1).jpg', '2023-07-20 21:30:31'),
(33, 29, '1690399128387-Rectangle 3.png', '2023-07-26 19:18:49'),
(34, 29, '1690399129589-Rectangle 6.png', '2023-07-26 19:18:49'),
(35, 29, '1690399129902-Rectangle 7.png', '2023-07-26 19:18:49'),
(36, 30, '1690484964400-PLZ_1171407_Exterior_1080x1350.jpg', '2023-07-27 19:09:25'),
(37, 27, '1690540855048-Rectangle 6.png', '2023-07-28 10:40:55'),
(38, 27, '1690540855228-Rectangle 7.png', '2023-07-28 10:40:55'),
(39, 27, '1690540854623-Rectangle 3.png', '2023-07-28 10:40:55'),
(40, 25, '1690541723759-Rectangle 3.png', '2023-07-28 10:55:24'),
(41, 25, '1690541724176-Rectangle 6.png', '2023-07-28 10:55:24'),
(42, 25, '1690541724356-Rectangle 7.png', '2023-07-28 10:55:24'),
(43, 31, '1690543331062-image_2023_07_28T11_06_44_707Z.png', '2023-07-28 11:22:11'),
(44, 32, '1690543548285-image_2023_07_28T11_06_44_707Z.png', '2023-07-28 11:25:49'),
(45, 32, '1690543665703-image_2023_07_28T11_06_44_707Z.png', '2023-07-28 11:27:46'),
(46, 32, '1690543718569-new-version-logo.jpg', '2023-07-28 11:28:38'),
(47, 33, '1690543818339-image_2023_07_28T11_06_44_707Z.png', '2023-07-28 11:30:19'),
(48, 34, '1690543954234-new-version-logo.jpg', '2023-07-28 11:32:34'),
(49, 35, '1690546338351-image_2023_07_28T11_06_44_707Z.png', '2023-07-28 12:12:19'),
(50, 37, '1690559007246-PLZ_1171407_Exterior_1080x1350.jpg', '2023-07-28 15:43:28'),
(51, 38, '1690559165745-download.jpg', '2023-07-28 15:46:05'),
(52, 39, '1690569089368-download.jpg', '2023-07-28 18:31:29'),
(53, 40, '1690569190092-image_2023_07_28T11_06_44_707Z.png', '2023-07-28 18:33:10'),
(54, 41, '1690569443111-PLZ_1171407_Exterior.jpg', '2023-07-28 18:37:23'),
(55, 41, '1690569539692-PLZ_1171407_Exterior.jpg', '2023-07-28 18:39:00'),
(56, 41, '1690569682843-PLZ_1171407_Exterior.jpg', '2023-07-28 18:41:23'),
(57, 41, '1690569759509-PLZ_1171407_Exterior.jpg', '2023-07-28 18:42:39'),
(58, 42, '1690569875115-image_2023_07_28T11_06_44_707Z.png', '2023-07-28 18:44:35'),
(59, 42, '1690570433555-2apple-linked-in-post.jpg-v3.jpg', '2023-07-28 18:53:54'),
(60, 42, '1690570433812-eid-mobarak.jpg-v1.jpg', '2023-07-28 18:53:54'),
(61, 42, '1690570434041-201568071_117737357183042_1847264703981397612_n.jpg', '2023-07-28 18:53:54'),
(62, 46, '1690571732074-image_2023_07_28T19_05_02_281Z.png', '2023-07-28 19:15:33'),
(63, 49, '1690572689631-image_2023_07_28T19_04_08_533Z.png', '2023-07-28 19:31:30'),
(64, 50, '1690575785532-image_2023_07_28T19_03_49_463Z.png', '2023-07-28 20:23:06'),
(65, 50, '1690575786413-image_2023_07_28T19_03_31_859Z.png', '2023-07-28 20:23:06'),
(66, 51, '1690614130078-image_2023_07_28T19_04_08_533Z.png', '2023-07-29 07:02:11'),
(67, 51, '1690614130995-image_2023_07_28T19_03_49_463Z.png', '2023-07-29 07:02:11'),
(68, 52, '1690618897441-image_2023_07_28T19_03_31_859Z.png', '2023-07-29 08:21:38'),
(69, 52, '1690618898406-image_2023_07_28T11_06_44_707Z.png', '2023-07-29 08:21:38'),
(70, 53, '1690620470645-image_2023_07_28T11_06_44_707Z.png', '2023-07-29 08:47:51'),
(71, 54, '1690620831133-image_2023_07_28T19_05_02_281Z.png', '2023-07-29 08:53:52'),
(72, 55, '1690621107132-image_2023-07-29_135824701.png', '2023-07-29 08:58:28'),
(73, 56, '1690625044018-17f161383828854220c7511b48a8b046.jpg', '2023-07-29 10:04:04'),
(74, 56, '1690625044542-219-2197605_new-3d-hd-wallpapers-1080p.jpg', '2023-07-29 10:04:04'),
(75, 56, '1690625044731-781c24022be5aa2840ca66ebe5a07425.jpg', '2023-07-29 10:04:04'),
(76, 56, '1690625044803-12311.jpg', '2023-07-29 10:04:04'),
(77, 58, '1690731429442-image_2023_07_30T15_25_40_535Z.png', '2023-07-30 15:37:10'),
(78, 59, '1690731844397-image_2023_07_30T15_25_40_535Z.png', '2023-07-30 15:44:05');

-- --------------------------------------------------------

--
-- Table structure for table `listings`
--

CREATE TABLE `listings` (
  `id` int(11) NOT NULL,
  `uid` varchar(250) NOT NULL,
  `title` varchar(500) NOT NULL,
  `rating` float(11,2) NOT NULL DEFAULT 0.00,
  `location` text DEFAULT NULL,
  `video_link` varchar(500) NOT NULL,
  `no_of_guests` int(11) NOT NULL,
  `no_of_pets` int(11) NOT NULL,
  `no_of_adults` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `city` text DEFAULT NULL,
  `country` varchar(44) NOT NULL,
  `no_of_shares` int(11) NOT NULL DEFAULT 0,
  `no_of_saved` int(11) NOT NULL DEFAULT 0,
  `rent` int(11) NOT NULL,
  `features` varchar(150) DEFAULT NULL,
  `stay_type` varchar(200) DEFAULT NULL,
  `contact_number` varchar(100) NOT NULL,
  `short_description` varchar(1000) DEFAULT NULL,
  `long_description` text DEFAULT NULL,
  `additional_info` text DEFAULT NULL,
  `image_logo` varchar(500) DEFAULT NULL,
  `lat` varchar(20) DEFAULT NULL,
  `lon` varchar(20) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `agent_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `listings`
--

INSERT INTO `listings` (`id`, `uid`, `title`, `rating`, `location`, `video_link`, `no_of_guests`, `no_of_pets`, `no_of_adults`, `category_id`, `city`, `country`, `no_of_shares`, `no_of_saved`, `rent`, `features`, `stay_type`, `contact_number`, `short_description`, `long_description`, `additional_info`, `image_logo`, `lat`, `lon`, `location_id`, `agent_id`, `product_id`, `created_at`, `updated_at`) VALUES
(52, 'AyoUyuPP', 'Surf lesson', 0.00, 'Armação de Pêra , Portugal', 'https://www.youtube.com/embed/ep6HEXUdT_A', 1, 1, 1, 6, 'Armação de Pêra', 'Portugal', 0, 0, 123, '3,4,5,6,7', 'Night Stay', '2222222222222', '2 hour surf lesson', '<p>Albufeira (Galé beach) has amazing conditions to learn how to surf and improve your surfing skills. The small and clean waves brakes on a perfect sandy beach and this conditions are awesome for the first surfing experience. If you have always liked the water and life on the beach, you will love surfing even more. Full equipment + Insurance included</p>', 'The check-in for participation in the activities must be done at the Water Smile balconies until 30 minutes before the scheduled start time, On the Galé Beach for Surf lessons oro n the São Rafael beach for Kayak tour, SUP tour or Coasteering.\n\nThe Water Smile company is not liable for the loss or damage of personal belongins during its activity.\nParticipation in any activity shall be prohibited to customers who present themselves with inappropriate or offensive clothing and / or under the influence of alcohol or narcotics.\n\nWith the purchase of the ticket to participate in the activities, The Water Smile company is authorized to capture and use the photographs obtained during the organized activity to which the ticket refers. If you do not authorize the capture and use of photographs and videos with your image, you must express this at the check-in balcony.\n\nWhen renting sports equipment, the customer must take care of it and return it in the same condition as it was delivered to him, otherwise he`ll have to support the repairing cost or even its full cost.\n\nThe Water Smile company has all required insurance, being licensed by Turismo de Portugal (RNAAT Nº 117/2015).\n\nPersonal data collected by the Water Smile company during the booking process are solely and exclusively used for the cliente check-in procedure. Customer data will not be used for any other purpose unless the customer authorizes to use it for Email Marketing purposes.\n\nThe Water Smile company reserves the right to change the prices.~\nVAT included at the current legal rate.\n\n\nCANCELLATION POLICIES\nThe reservation cancellation must be made up to 48 hours before the start of the activity. Cancellations within the 48 hour period will not be entitled to a refund, except in the presentation of medical report.\n\nIn the event of Water Smile company cancels an experience due to sea or weather conditions or unforeseen circumstances, an alternative date will be offered. If this change is not possible, a full refund will be provide.\n\n\nTRANSPORT\nSubject to time, availability and booking, only in the Albufeira area. The pickups will be made at the place and time combined with the customer, and the driver may be a maximum delay of 30 minutes. In case of delay by the customer, the driver will wait for maximum of 2 minutes.\n\nWhen this situation results in the cancellation or impossibility in the participation of the activity, no amount will be refunded\n', 'https://devqastoragepluralo.blob.core.windows.net/prod/SUP00091/PRD00456/8db158d15d7e104.Jpeg', '37.1', '-8.3667', 16, 91, 456, '2023-07-29 08:21:34', NULL),
(53, '1kB2kkV1', 'full day wine tasting tour', 0.00, 'Faro , Portugal', 'https://www.youtube.com/embed/ep6HEXUdT_A', 1, 1, 1, 3, 'Faro', 'Portugal', 0, 0, 234, '4,5,6,7', 'Weekly Stay', '2222222222222', 'soak up the stunning views of  Algarve hidden jams on this full day wine tasting tour', '<p>Visit tow family - owned wineries Enjoy a guided tour around the vineyards and wine caller Learn about the wine- making process from grape to glass Taste three wines in each winery (with a small snack) Explore the charming cobble stone streets of Silves historical town (2 hours) hotel pick up and drop off.(included)</p>', 'cancellation and changes available up to 24 hours before the tour', 'https://devqastoragepluralo.blob.core.windows.net/prod/SUP00101/PRD00873/8d71a930febbf94.Jpeg', '37.0161', '-7.935', 10, 101, 873, '2023-07-29 08:47:49', NULL),
(54, '5Y2lRuFv', 'Half Day Wine Tasting Tour', 0.00, 'Aljezur , Portugal', 'https://www.youtube.com/embed/S4URi3wes2k&t', 1, 1, 1, 6, 'Aljezur', 'Portugal', 0, 0, 55, '4,5,6,7', 'Night Stay', '2222222222222', 'Soak up the stunning views of Algarve hidden jams on this 4 hours wine tasting tour', '<p>• visit family owned winery • learn about the wine making process from grape to glass. • Taste selection of fine Portuguese wine. • Visit the town of Silves - enjoy free time to explore the charming cobble stone streets. • Hotel pickup and drop-off is included</p>', 'cancellations and changes up to 24 hours before the date of the tour.\nminimum drinking age - 18 years old', 'https://devqastoragepluralo.blob.core.windows.net/prod/SUP00101/PRD00872/8d71a91ca091d36.Jpeg', '37.3178', '-8.8', 15, 101, 872, '2023-07-29 08:53:49', NULL),
(55, 'y3Wv0rNB', 'Kayak caves tour', 0.00, 'Loulé , Portugal', 'https://www.youtube.com/embed/d1DhBZVL5Pg', 1, 1, 1, 3, 'Loulé', 'Portugal', 0, 0, 234, '3,4,5,6,7', 'Night Stay', '2222222222222', 'Experience some of the best sea caves in the famous São Rafael Beach', '<p>Starting directly from the white sand of São Rafael Beach in Agarve, we venture through the calm and clear ocean near the shore, exploring the beautiful Albufeira coastline and caves. Easy and suitable for all levels. Great activity for family and friends, couples and also group parties. Our professional crew is here to ensure that you have a unique and memorable experience. - location: São Rafael Beach - Albufeira - Includes all equipment + fully insurance - Full instructions for Beginers - 2h00 hours Tour</p>', 'The check-in for participation in the activities must be done at the Water Smile balconies until 30 minutes before the scheduled start time, On the Galé Beach for Surf lessons oro n the São Rafael beach for Kayak tour, SUP tour or Coasteering.\n\nThe Water Smile company is not liable for the loss or damage of personal belongins during its activity.\nParticipation in any activity shall be prohibited to customers who present themselves with inappropriate or offensive clothing and / or under the influence of alcohol or narcotics.\n\nWith the purchase of the ticket to participate in the activities, The Water Smile company is authorized to capture and use the photographs obtained during the organized activity to which the ticket refers. If you do not authorize the capture and use of photographs and videos with your image, you must express this at the check-in balcony.\n\nWhen renting sports equipment, the customer must take care of it and return it in the same condition as it was delivered to him, otherwise he`ll have to support the repairing cost or even its full cost.\n\nThe Water Smile company has all required insurance, being licensed by Turismo de Portugal (RNAAT Nº 117/2015).\n\nPersonal data collected by the Water Smile company during the booking process are solely and exclusively used for the cliente check-in procedure. Customer data will not be used for any other purpose unless the customer authorizes to use it for Email Marketing purposes.\n\nThe Water Smile company reserves the right to change the prices.~\nVAT included at the current legal rate.\n\n\nCANCELLATION POLICIES\nThe reservation cancellation must be made up to 48 hours before the start of the activity. Cancellations within the 48 hour period will not be entitled to a refund, except in the presentation of medical report.\n\nIn the event of Water Smile company cancels an experience due to sea or weather conditions or unforeseen circumstances, an alternative date will be offered. If this change is not possible, a full refund will be provide.\n\n\nTRANSPORT\nSubject to time, availability and booking, only in the Albufeira area. The pickups will be made at the place and time combined with the customer, and the driver may be a maximum delay of 30 minutes. In case of delay by the customer, the driver will wait for maximum of 2 minutes.\n\nWhen this situation results in the cancellation or impossibility in the participation of the activity, no amount will be refunded\n', 'https://devqastoragepluralo.blob.core.windows.net/prod/SUP00091/PRD00459/8db215840e7ef8d.Jpeg', '37.144', '-8.0235', 20, 91, 459, '2023-07-29 08:58:25', NULL),
(56, 'GEKcZMC0', 'Tangerina II (5:30h) - Privado', 0.00, 'Albufeira  , Portugal', 'https://www.youtube.com/watch?v=XwrjABFHaJ0', 1, 2, 1, 2, 'Albufeira ', 'Portugal', 0, 0, 44, '3,7,2', 'Weekly Stay', '221223123', 'Elegante e Luxuoso Catamaran ', '<p>Sente-se e relaxe com uma bebida de boas-vindas na mão enquanto velejamos rumo á area de Carvoeiro. Navegue para oeste perto da maravilhosa costa algarvia até a área de Alfanzina / Carvoeiro, avistando as maravilhosas formações rochosas como o Arco dos Namorados e a famosa rocha do SUBMARINO. Na gruta de Benagil, chegamos o mais perto possível da entrada da mesma. Encontraremos o local ideal para pararmos e nadar no mar (se o tempo permitir). O convés duplo e a confortável área da rede oferecem uma navegação tranquila, tornando toda a experiência uma diversão e relaxamento, ouvindo música, tomando banhos de sol, divertindo-se. Inclui um almoço leve servido a bordo: tábua de queijos e presunto, camarão, baguete mista, batatas fritas, frutas e 1 bolo tradicional português \"Pastel de Nata\". Vinho, cerveja, refrigerantes e água.</p>', 'INFO CHECK-IN\nCheck-in 30 minutos antes do embarque no escritório \"Dream Cruises\", Marina de Albufeira.\n\nCONDIÇÕES GERAIS:\n1 - A paragem para banho dependem das condições do tempo/mar.\n2 - A  Dream Cruises, Lda. reserva-se o direito de alterar, remarcar ou cancelar os passeios para garantir a segurança dos clientes.\n3 - Cancelamentos efetuados entre 2 a 10 dias antes da partida,será reembolsado 80% do valor pago. Cancelamentos sem aviso prévio, no mesmo dia ou a não comparência no check-in, invalida o reembolso.\n4 - Em caso de más condições meteorologicas ou logisticas, cabe a Dream Cruises, Lda., a decisão de cancelamento.\n5 - Em caso de necessidade de regressar ao porto mais cedo, devido as condições meteorologicas, cabe a decisão ao capitão. Não será feito reembolso.\n6 - Todos os passageiros estão cobertos pelo seguro obrigatório por lei.\n7 - Todos os litígios emergentes serão julgados pelo tribunal da Comarca de Albufeira, com expressa renúncia a qualquer outro.\n8 - Todos os pertences transportados são da inteira responsabilidade do cliente.\n\nINFO CHECK-IN\nCheck-in 30 minutes before departure at \"Dream Cruises\" office, in Marina de Albufeira.\n\nGENERAL MARKS:\n1 - Visits to the caves/stop for bathing depend on weather/sea conditions.\n2 - Dream Cruises, Lda. reserves the right to change, reschedule or cancel tours to ensure customer safety.\n3 - The customer is responsible for the full value of the trip, if after confirmed it is canceled within 2 days before departure. Cancellations made from 2 to 10 days before departure, receive 80% of the amount paid. Cancellations without notice, on the same day or no-show at check-in, there is no refund.\n4 - In case of bad weather conditions or logistics issue, it is up to Dream Cruises, Lda., the cancellation decision.\n5 - In case of need to return to the port earlier, due to weather conditions, it is up to the captain to decide. No refund will be made.\n6 - All passengers are covered by the insurance required by law.\n7 - All emerging disputes will be judged by the Court of the District of Albufeira, with express waiver of any other.\n8 - Dream Cruises, Lda is in no case responsible for belongings transported by clients during the tour.', '', '8.2179876', '37.112139', 7, 152, 1494, '2023-07-29 10:01:31', NULL),
(59, 'bDQ1JXbC', 'Full Day Wine Tasting Tour', 0.00, 'Aljezur , Portugal', 'https://www.youtube.com/embed/QQEZth6GfFw', 1, 1, 1, 6, 'Aljezur', 'Portugal', 0, 0, 80, '3,4,5,6,7,8,9,10,11', 'Night Stay', '2222222222222', 'soak up the stunning views of  Algarve hidden jams on this full day wine tasting tour', '<h2>Visit tow family - owned wineries</h2><p>Enjoy a guided tour around the vineyards and wine caller Learn about the wine - making process from grape to glass.</p><p>Taste three wines in each winery (with a small snack). Explore the charming cobble stone streets of Silves historical town (2 hours)</p><p>hotel pick up and drop off.(included)</p><p><br></p><h2><strong>Important Information</strong></h2><p>Extra-person charges may apply and vary depending on property policy</p><p>Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges</p><p>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</p><p>Onsite parties or group events are strictly prohibited.</p>', 'cancellation and changes available up to 24 hours before the tour', 'https://devqastoragepluralo.blob.core.windows.net/prod/SUP00101/PRD00873/8d71a930febbf94.Jpeg', '37.3178', '-8.8', 15, 101, 873, '2023-07-30 15:44:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `saved_listings`
--

CREATE TABLE `saved_listings` (
  `id` int(11) NOT NULL,
  `listing_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stay_type`
--

CREATE TABLE `stay_type` (
  `id` int(11) NOT NULL,
  `name` varchar(144) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stay_type`
--

INSERT INTO `stay_type` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Night Stay', '2023-06-21 09:37:50', NULL),
(2, 'Weekly Stay', '2023-06-21 09:37:50', NULL),
(3, 'Monthly stay', '2023-06-21 09:38:08', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(244) NOT NULL,
  `email` varchar(244) NOT NULL,
  `password` varchar(244) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `subscribed` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `subscribed`, `created_at`, `updated_at`) VALUES
(1, 'M Nabeel Arshad', 'nabeel_arshad93@outlook.com', '$2b$12$SGSuX9O6Wj94QtFL0Kio8.KCDMh.7a707Im5qEbXnU6loK4F6HxJu', NULL, 1, '2023-06-21 10:29:45', NULL),
(2, 'shoaib ali ', 'shoaibkiani2@gmail.com', '$2b$12$.qqE6O78YDu447v0z8prXOTmC0zQzNSN3si0EVahFrd/QsdBSxTDK', NULL, 1, '2023-07-02 18:15:28', NULL),
(3, 'shoaib alijkl', 'mskiani777@gmail.com', '$2b$12$k8U9GiOWkddWjivNsi2mROvyUKpP/xGY0aeQPvCrEhJq1QxfAPndW', NULL, 0, '2023-07-02 20:25:38', NULL),
(4, 'ali', 'mskiani7772@gmail.com', '$2b$12$Rj3kBZoBJYiPZPE2Z960EOULI8DBB.DD3thp75Q6uxQN7F4dJrNR2', NULL, 0, '2023-07-03 21:23:51', NULL),
(5, 'shoaib ali ', 'mskiani7771@gmail.com', '$2b$12$EUzprIL3BttA84EQr/HkE.jfDpfLzleiCqnUqiUtUmZkqqHP0glzi', NULL, 0, '2023-07-03 21:30:33', NULL),
(6, 'shoaib ali', 'shoaibkiani22@gmail.com', '$2b$12$P7VH9AGzivtFIIS6D9xvBekav7yUIKyVYxL2GoXYT0QlxJXrcuAeW', NULL, 0, '2023-07-03 22:20:17', NULL),
(7, 'shoaib ali', 'shoaibkiani211@gmail.com', '$2b$12$S6KKAcRPnF4Tpl0U8NmXmeeiVXEjp8iBoQFosX1atAj/T4HqeBHGm', NULL, 0, '2023-07-04 18:23:35', NULL),
(8, 'Shoaib ali', 'shoaib@gmail.com', '$2b$12$wimtHjuLOZpRRyROIUtOEOJyooO5QqQk9dhtVLWNbDjZyt/.2kczq', NULL, 0, '2023-07-05 22:33:25', NULL),
(9, 'shoaib ali', 'shoaib1@gmail.com', '$2b$12$OCp8/gvIxeMSt0sxQT9SgOIw11ClhloFhB8NH.S.E9JlkV.y5kKSq', NULL, 0, '2023-07-05 22:35:22', NULL),
(10, 'Shoaib kiani', 'shoaib3@gmail.com', '$2b$12$NVfxwhl92mYr6XZHDv8WMOrW1imzC2dImq8HnWCDpkM7.DyIK9ENi', NULL, 1, '2023-07-05 22:51:02', NULL),
(11, 'atif shabbir', 'atifshabbir20@gmail.com', '$2b$12$5owT8NBWFd3USw.fu2.HBOb4BuQi7v0CczxWY2YW4q/Z3jEfCuNeO', NULL, 0, '2023-07-29 07:06:46', NULL),
(12, 'atif shabbir', 'atifdigital656@gmail.com', '$2b$12$JTmz9k1/52p33CU6zhmoU.B0Kikzkf0k2r700jW3P1bqMto1z3V4a', NULL, 0, '2023-07-29 09:30:30', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us_queries`
--
ALTER TABLE `contact_us_queries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listings`
--
ALTER TABLE `listings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `saved_listings`
--
ALTER TABLE `saved_listings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stay_type`
--
ALTER TABLE `stay_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `contact_us_queries`
--
ALTER TABLE `contact_us_queries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `listings`
--
ALTER TABLE `listings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `saved_listings`
--
ALTER TABLE `saved_listings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `stay_type`
--
ALTER TABLE `stay_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
