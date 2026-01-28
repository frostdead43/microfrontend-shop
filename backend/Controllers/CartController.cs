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

      [HttpGet]
      public async Task<ActionResult<IEnumerable<CartItem>>> GetAllCart()
        {
          var items = await _cartService.GetAllCartAsync();
          return Ok(items);
        }
    }

    


}
