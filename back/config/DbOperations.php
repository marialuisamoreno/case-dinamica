<?php 
    include_once dirname(__FILE__)  . '/Constants.php';

    class DbOperations{
        private $environment;
        function __construct($environment){
            ini_set('memory_limit', '2048M');            
            require_once dirname(__FILE__) . '/DbConnect.php';
            $this->environment = $environment;
        }

        public function getAllProducts(){
            $db = new DbConnect; 
            $oci = $db->connect($this->environment); 

            $sql = "
                    SELECT 
                        AP.ID_PROD, AP.PROD_NAME, AP.IMAGE_FILE, AP.PRICE, AP.PROMO_STATUS, AP.PROMO_PRICE, AP.EMBLEM,
                        GROUP_CONCAT(SZ.SIZE SEPARATOR '; ') AS SIZES,
                        GROUP_CONCAT(TG.TAG SEPARATOR '; ') AS TAGS
                    FROM
                        all_products AP
                            LEFT JOIN
                        sizes SZ ON AP.ID_PROD = SZ.ID_PROD
                            LEFT JOIN
                        tags TG ON AP.ID_PROD = TG.ID_PROD
                    GROUP BY AP.ID_PROD
            ";
            
            $stmt = $oci->query($sql);
            return $stmt;
        }

        public function addProduct($PROD_NAME, $IMAGE_FILE, $PRICE, $PROMO_STATUS, $PROMO_PRICE, $EMBLEM, $SIZE, $TAG){
            $db = new DbConnect; 
            $oci = $db->connect($this->environment);
            
            $sql = "
                INSERT INTO all_products (PROD_NAME, IMAGE_FILE, PRICE, PROMO_STATUS, PROMO_PRICE, EMBLEM) 
                VALUES (:PROD_NAME, :IMAGE_FILE, :PRICE, :PROMO_STATUS, :PROMO_PRICE, :EMBLEM)
            ";
            
            $stmt = $oci->prepare($sql);
            $stmt->bindParam(':PROD_NAME', $PROD_NAME, PDO::PARAM_STR);
            $stmt->bindParam(':IMAGE_FILE', $IMAGE_FILE, PDO::PARAM_STR);
            $stmt->bindParam(':PRICE', $PRICE, PDO::PARAM_INT);
            $stmt->bindParam(':PROMO_STATUS', $PROMO_STATUS, PDO::PARAM_STR);
            $stmt->bindParam(':PROMO_PRICE', $PROMO_PRICE, PDO::PARAM_INT);
            $stmt->bindParam(':EMBLEM', $EMBLEM, PDO::PARAM_STR);
            $stmt->execute();
            $ID_PRODUCT = $oci->lastInsertId();

            // Inserting the size
            $sql = "
                INSERT INTO sizes (ID_PROD, SIZE) 
                VALUES (:ID_PROD, :SIZE)
            ";
            
            $stmt = $oci->prepare($sql);
            $stmt->bindParam(':ID_PROD', $ID_PRODUCT, PDO::PARAM_INT);
            $stmt->bindParam(':SIZE', $SIZE, PDO::PARAM_STR);
            $stmt->execute();

            // Inserting the tags
            $sql = "
                INSERT INTO tags (ID_PROD, TAG) 
                VALUES (:ID_PROD, :TAG)
            ";
            
            $stmt = $oci->prepare($sql);
            $stmt->bindParam(':ID_PROD', $ID_PRODUCT, PDO::PARAM_INT);
            $stmt->bindParam(':TAG', $TAG, PDO::PARAM_STR);
            $stmt->execute();

            return $ID_PRODUCT;
        }

        public function getAllEmblems(){
            $db = new DbConnect; 
            $oci = $db->connect($this->environment); 

            $sql = "
                SELECT EMBLEM FROM emblems
            ";
            
            $stmt = $oci->query($sql);
            return $stmt;
        }

        public function getAllStatus(){
            $db = new DbConnect; 
            $oci = $db->connect($this->environment); 

            $sql = "
                SELECT STATUS FROM status_promo
            ";
            
            $stmt = $oci->query($sql);
            return $stmt;
        }
    }
?>