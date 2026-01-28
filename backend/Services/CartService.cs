using System;
using backend.Data;
using backend.Models;

namespace backend.Services;

public class CartService : ICartService
{
  public Task<CartItem?> AddToCartAsync(CartItem item)
  {
    var existingItems = CartData.CartItems.FirstOrDefault(x=> x.Id == item.Id);

    if (existingItems != null)
    {
      existingItems.Quantity += item.Quantity;
      return Task.FromResult<CartItem?>(existingItems); 
    }

    CartData.CartItems.Add(item);
    return Task.FromResult<CartItem?>(item); 
  }

  public Task<CartItem?> DecreaseQuantityAsync(int id)
  {
    var item = CartData.CartItems.FirstOrDefault(x => x.Id == id);
    if(item == null)
    {
       return Task.FromResult<CartItem?>(null);
    }
    if (item.Quantity == 1)
    {
      CartData.CartItems.Remove(item);
      return Task.FromResult<CartItem?>(null);
    }
    item.Quantity -= 1;
    return Task.FromResult<CartItem?>(item);
    
  }

  public Task<bool> DeleteFromCartAsync(int id)
  {
    var existingItem = CartData.CartItems.FirstOrDefault(x => x.Id == id);

    if (existingItem == null)
    {
      return Task.FromResult(false);
    }
    CartData.CartItems.Remove(existingItem);
    return Task.FromResult(true);
  }

  public async Task<List<CartItem>> GetAllCartAsync()
  {
    return await Task.FromResult(CartData.CartItems);
  }

  public Task<CartItem> IncreaseQuantityAsync(int id)
  {
    var item = CartData.CartItems.FirstOrDefault(x => x.Id == id);

    if (item == null)
    {
       throw new Exception("Product can't be found");
    };
    item.Quantity +=1;
    return Task.FromResult(item);
  }
}
