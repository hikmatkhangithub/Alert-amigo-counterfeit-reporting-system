pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint256 public productCount = 0;
    mapping(uint256 => Product) public products;

    struct Product {
        uint256 id;
        string pname;
        uint256 price;
        string pCategory;
        string pBrand;
        string pCountryOfOrigin;
        address payable owner;
        uint256 txHash;
        bool purchased;
    }

    event ProductCreated(
        uint256 id,
        string pname,
        uint256 price,
        string pCategory,
        string pBrand,
        string pCountryOfOrigin,
        address payable owner,
        uint256 txHash,
        bool purchased
    );

    constructor() public {
        name = "Dapp University Marketplace";
    }

    function createProduct(
        string memory _pname,
        uint256 _price,
        string memory _pCategory,
        string memory _pBrand,
        string memory _pCountryOfOrigin
    ) public {
        // Require a valid name
        require(bytes(_pname).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment product count
        productCount++;
        // Create the product
        products[productCount] = Product(
            productCount,
            _pname,
            _price,
            _pCategory,
            _pBrand,
            _pCountryOfOrigin,
            msg.sender,
            block.number,
            false
        );
        // Trigger an event
        emit ProductCreated(
            productCount,
            _pname,
            _price,
            _pCategory,
            _pBrand,
            _pCountryOfOrigin,
            msg.sender,
            block.number,
            false
        );

    }

}
