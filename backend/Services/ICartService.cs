using System;
using backend.Models;

namespace backend.Services;

public interface ICartService
{
  Task<List<CartItem>> GetAllCartAsync();

  Task<CartItem?> AddToCartAsync(CartItem item);

  Task<bool> DeleteFromCartAsync(int id);

  Task<CartItem> IncreaseQuantityAsync(int id);

  Task<CartItem?> DecreaseQuantityAsync(int id);

}
