import torch as torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import torch.utils.data as data
import torch.cuda
import torchvision
import torchvision.datasets as datasets
import torchvision.models as models
import torchvision.transforms as transforms

import matplotlib.pyplot as plt
import numpy as np

def imshow(img):
    npimg = img.numpy()
    plt.imshow(np.transpose(npimg, (1, 2, 0)))
    plt.show()

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(3, 6, 5)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(6, 16, 5)
        self.fc1 = nn.Linear(16 * 21 * 21, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 20)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 16 * 21 * 21)
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = F.softmax(self.fc3(x), dim=1)
        return x    

def train_model(net, optimizer, criterion, epochs):
    minibatches_per_print = 2

     # Loop over the dataset multiple times
    for epoch in range(epochs):
        running_loss = 0.0
        for i, data in enumerate(trainloader, 0):
            # Get the inputs; data is a list of [inputs, labels]
            inputs, labels = data
            print(type(inputs))

            # Zero the parameter gradients
            optimizer.zero_grad()

            # Forward + backward + optimize
            outputs = net(inputs)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()

            running_loss += loss.item()

            # Print training statistics
            if i % minibatches_per_print == minibatches_per_print - 1:    # print every minibatches_per_print mini-batches
                print('[Model %d, mini-batch %5d] loss: %.3f' %
                    (epoch + 1, i + 1, running_loss / minibatches_per_print))
                running_loss = 0.0

    print('Finished Training')

def getClassNames():
    return ['bald_eagle', 'black_bear', 'bobcat', 'canada_lynx', 'columbian_black-tailed_deer', 
    'cougar', 'coyote', 'deer', 'elk', 'gray_fox', 'gray_wolf', 'mountain_beaver', 'nutria', 'raccoon',
    'raven', 'red_fox', 'ringtail', 'sea_lions', 'seals', 'virginia_opossum']


def trainSave():
    train_model(net, optimizer, criterion, 4)
    PATH = './wild_net.pth'
    torch.save(net.state_dict(), PATH)

if __name__ == '__main__':
    data_path = './data/archive/oregon_wildlife/oregon_wildlife'

    transform = transforms.Compose([transforms.Resize(size=(96,96)) ,transforms.ToTensor()])

    trainset = torchvision.datasets.ImageFolder(root=data_path, transform=transform)
    trainloader = data.DataLoader(trainset, batch_size=4, shuffle=True, num_workers=2)

    testset = torchvision.datasets.ImageFolder(root=data_path, transform=transform)
    testloader = torch.utils.data.DataLoader(testset, batch_size=4, shuffle=False, num_workers=2)

    if torch.cuda.is_available():
        print("CUDA is available. Attempting to set device to GPU.")
        device = torch.cuda.device("cuda:0")
    else:
        print("CUDA is not available. Setting device to CPU.")
        device = torch.device("cpu")

    # Mapping each index to a class name
    classes = getClassNames()

    # Get some random training images to display (verifying the images in the dataset are what we expect)
    dataiter = iter(trainloader)
    images, labels = dataiter.next()
    imshow(torchvision.utils.make_grid(images))
    # Print labels for the images we're displaying
    print(' '.join('%5s' % classes[labels[j]] for j in range(4)))

    # Define the network, loss function, and optimizer
    net = Net()
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.SGD(net.parameters(), lr=0.001, momentum=0.9)

    trainSave()
