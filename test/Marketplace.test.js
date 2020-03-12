const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Marketplace', ([deployer, seller, buyer]) => {
  let marketplace

  before(async () => {
    marketplace = await Marketplace.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await marketplace.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await marketplace.name()
      assert.equal(name, 'Dapp University Marketplace')
    })
  })

  describe('products', async () => {
    let result, result1, productCount, productCount1

    before(async () => {
      result = await marketplace.createProduct('iPhone X', web3.utils.toWei('1', 'Ether'), '', '', '', { from: seller } )

     // console.log(result+"result of the first function")
      productCount = await marketplace.productCount()
     // console.log(productCount+"this is the product count" )
     // result1 = await marketplace.createProduct1('', '', '', '', '', '', { from: seller })

     // productCount1 = await marketplace.productCount1()
     // console.log(result1+"result of the second fucntion")
     // console.log(productCount1+"this is the product count 2")
    })

    it('creates products', async () => {
      // SUCCESS
      assert.equal(productCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
      assert.equal(event.pname, 'iPhone X', 'name is correct')
      assert.equal(event.price, '1000000000000000000', 'price is correct')
      assert.equal(event.pCategory, '', 'catogory is correct')
      assert.equal(event.pBrand, '', 'brand is correct')
      assert.equal(event.pCountryOfOrigin, '', 'country is correct')

      assert.equal(event.owner, seller, 'owner is correct')
      assert.equal(event.purchased, false, 'purchased is correct')
      console.log(event)
     /* const event1 = result1.logs[0].args
      console.log(event1)
      assert.equal(event1.pRiskType, '', 'no risk correct')
      assert.equal(event1.pAlertSubmittedBy, '', 'no alert is correct')
      assert.equal(event1.pYourCity, '', 'no alert is correct')
      assert.equal(event1.pYourAddress, '', 'no alert is correct')
      assert.equal(event1.pUploadFile, '', 'no alert is correct')
      assert.equal(event1.pDescription, '', 'no alert is correct')
*/


      // FAILURE: Product must have a name
      await await marketplace.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
      // FAILURE: Product must have a price
      await await marketplace.createProduct('iPhone X', 0, { from: seller }).should.be.rejected;
    })

    it('lists products', async () => {
      const product = await marketplace.products(productCount)
      //const product1 = await marketplace.productss(productCount1)

      assert.equal(product.id.toNumber(), productCount.toNumber(), 'id is correct')
      assert.equal(product.pname, 'iPhone X', 'name is correct')
      assert.equal(product.price, '1000000000000000000', 'price is correct')

      assert.equal(product.pCategory, '', 'catogory is correct')
      assert.equal(product.pBrand, '', 'brand is correct')
      assert.equal(product.pCountryOfOrigin, '', 'country is correct')

      assert.equal(product.owner, seller, 'owner is correct')
      assert.equal(product.purchased, false, 'purchased is correct')

     /* assert.equal(product1.pRiskType, '', 'no risk correct')
      assert.equal(product1.pAlertSubmittedBy, '', 'no alert is correct')
      assert.equal(product1.pUploadFile, '', 'no alert is correct')
      assert.equal(product1.pDescription, '', 'no alert is correct')*/



    })
  })
})
