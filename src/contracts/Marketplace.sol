pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    mapping(uint256 => Product) public products;
<<<<<<< HEAD
  
    
=======
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164

    struct Product {
        uint id;
        string pname;
        uint price;
        string pCategory;
        string pBrand;
        string pCountryOfOrigin;
        address payable owner;
        bool purchased;
        
    }

<<<<<<< HEAD

=======
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
    event ProductCreated(
        uint id,
        string pname,
        uint price,
        string pCategory,
        string pBrand,
        string pCountryOfOrigin,
        address payable owner,
        bool purchased
        
    );
    

   
    constructor() public {
        name = "Dapp University Marketplace";
    }

    function createProduct(string memory _pname, uint _price, string memory _pCategory, string memory _pBrand, string memory _pCountryOfOrigin) public {
        // Require a valid name
        require(bytes(_pname).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment product count
        productCount ++;
        // Create the product
        products[productCount] = Product(productCount, _pname, _price, _pCategory, _pBrand, _pCountryOfOrigin, msg.sender, false);
        // Trigger an event
        emit ProductCreated(productCount, _pname, _price,  _pCategory,  _pBrand, _pCountryOfOrigin, msg.sender, false);
        
    }
    
   
}
