-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema case
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `case` DEFAULT CHARACTER SET utf8 ;
USE `case` ;

-- -----------------------------------------------------
-- Table `case`.`ALL_PRODUCTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `case`.`ALL_PRODUCTS` (
  `ID_PROD` INT NOT NULL AUTO_INCREMENT,
  `PROD_NAME` VARCHAR(45) NOT NULL,
  `IMAGE_FILE` LONGBLOB NOT NULL,
  `PRICE` FLOAT NOT NULL,
  `PROMO_STATUS` VARCHAR(45) NOT NULL,
  `PROMO_PRICE` FLOAT,
  `EMBLEM` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_PROD`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `case`.`TAGS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `case`.`TAGS` (
  `ID_PROD_TAG` INT NOT NULL AUTO_INCREMENT,
  `ID_PROD` INT NOT NULL,
  `TAG` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_PROD_TAG`),
  FOREIGN KEY (`ID_PROD`)
    REFERENCES `case`.`ALL_PRODUCTS` (`ID_PROD`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `case`.`SIZES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `case`.`SIZES` (
  `ID_PROD_SIZE` INT NOT NULL AUTO_INCREMENT,
  `ID_PROD` INT NOT NULL,
  `SIZE` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_PROD_SIZE`),
  FOREIGN KEY (`ID_PROD`)
    REFERENCES `case`.`ALL_PRODUCTS` (`ID_PROD`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `case`.`STATUS_PROMO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `case`.`STATUS_PROMO` (
  `ID_STATUS_PROMO` INT NOT NULL AUTO_INCREMENT,
  `STATUS` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_STATUS_PROMO`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `case`.`EMBLEMS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `case`.`EMBLEMS` (
  `ID_EMBLEM` INT NOT NULL AUTO_INCREMENT,
  `EMBLEM` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_EMBLEM`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `case`.`SYS_LOG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `case`.`SYS_LOG` (
  `ID_SYS_LOG` INT NOT NULL AUTO_INCREMENT,
  `ID_TABLE` INT NOT NULL,
  `TABLE_NAME` VARCHAR(45) NOT NULL,
  `LOG_ACTION` VARCHAR(45) NOT NULL COMMENT 'DELETE\nUPDATE\nCREATE',
  `FIELD` VARCHAR(45) NULL,
  `OLD_VALUE` VARCHAR(45) NULL,
  `NEW_VALUE` VARCHAR(45) NULL,
  `LOG_DATE` DATE NOT NULL,
  PRIMARY KEY (`ID_SYS_LOG`)
)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


