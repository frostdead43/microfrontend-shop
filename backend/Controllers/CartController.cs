using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using backend.Services;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/cart")]
    [ApiController]
    public class CartController : ControllerBase
    {
      private readonly ICartService _cartService;
        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

      [HttpGet]
      public async Task<ActionResult<IEnumerable<CartItem>>> GetAllCart()
      {
        var items = await _cartService.GetAllCartAsync();
        return Ok(items);
      }


      [HttpPost] 
      public async Task<IActionResult> AddToCart([FromBody] CartItem item)
      {
        var items = await _cartService.AddToCartAsync(item);

        if(items == null) {return BadRequest();}

        return Ok(items);
          
      }


      [HttpDelete("{id}")]
      public async Task<IActionResult> DeleteFromCart(int id)
      {
        var isSuccess = await _cartService.DeleteFromCartAsync(id);
        if(!isSuccess)
        {
            return NotFound(new {message = "Not Found"});
        }
        return Ok();
      }


    [HttpPut("increase/{id}")]
      public async Task<ActionResult> IncreaseQuantity(int id)
    {
      try
      {
        var item = await _cartService.IncreaseQuantityAsync(id);
        return Ok(item);
      }
      catch
      {
        return NotFound(new { message = "Product not found" });
      }
    }

    [HttpPut("decrease/{id}")]
    public async Task<IActionResult> DecreaseQuantity(int id)
    {
        var item = await _cartService.DecreaseQuantityAsync(id);

        if (item == null)
            return NotFound(new { message = "Product removed or not found" });

        return Ok(item);
    }


   
    }

    


}
