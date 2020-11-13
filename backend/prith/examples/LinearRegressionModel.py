#imports

import torch
import torch.nn as nn
import matplotlib.pyplot as plt
import numpy as np

#untrained data
X = torch.randn(100, 1)*10
Y = X + 3 * torch.randn(100,1)
plt.plot(X.numpy(), Y.numpy(), 'o')
plt.ylabel('y')
plt.xlabel('x')


#class for linear regression and plotting, returns prediction
class LR(nn.Module):
  def __init__(self, input_size, output_size):
    super().__init__()
    self.linear = nn.Linear(input_size, output_size)
  def forward(self, x):
    pred = self.linear(x)
    return pred
    
#learning rate using torch   
torch.manual_seed(1)
model = LR(1,1)
print(model)

#return the parameters
[w, b] = model.parameters()
w1 = w[0][0].item()
b1 = b[0].item()
print(w1, b1)
def get_params():
  return (w1,b1)


#function to plot
def plot_fit(title):
  plt.title = title
  w1, bi = get_params()
  x1 = np.array([-30, 30])
  y1 = w1*x1 + b1
  plt.plot(x1, y1, 'r')
  plt.scatter(X, Y)
  plt.show()
  
#initial model
plot_fit('Initial Model')
  
 #time for final model, using learning rate and SGD 
criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr = 0.01)

#create model for losses (learning rate)
epochs = 100
losses = []
for i in range(epochs):
  y_pred = model.forward(X)
  loss = criterion(y_pred, Y)
  print("epoch:", "loss:", loss.item())
  losses.append(loss)
  optimizer.zero_grad()
  loss.backward() #intro to tensor
  optimizer.step()

#plot the losses
plt.plot(range(epochs), losses)
plt.ylabel('Loss')
plt.xlabel('epoch')


#fit the data
plot_fit("final")


#small example
x = torch.tensor([[1.0],[1.0]])
print(model.forward(x))
