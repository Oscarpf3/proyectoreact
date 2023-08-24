-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-08-2023 a las 01:38:36
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoreact`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Especial de la Casa', 'la favorita de Graciela', 'jamon crudo, jamon cocido, pategras, sardo, roquefort, salame caroya, lomo ahumado, papas al horno, peras, uvas y frutos secos', 'bgoxdgbfx0slss9x5rfz'),
(2, 'Picada Tradicional ', 'para compartir en familia', 'fontina, mortadela, chorizo colorado, jamon crudo, pategras, leber, salame milan, cherrys, aceitunas y crutones', 'jkepocytim13nm7viewd'),
(4, 'Picada Infernal', 'Variedad de picantes', 'salame, cantinpalo, jamon, chorizo colorado, lomito aumado, pategras y fontina', 'bb4ilq20fm1lfgidn5oh'),
(6, 'Picada rapida', 'la que mas sale y la mas economica', 'salame, jamon cocido, mortadela, roquefort, fontina, pategras y aceitunas', 'pkpidjuwtxn2eayuzwxp'),
(10, 'Picada Quesera', 'Para los amantes del queso', 'Fontina, sardo, queso azul, brie y pategras ', 'sw5jgjwvatblesihurie');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'oscar', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'federico', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
