import torch as torch
import torch.nn as nn
import torch.optim as optim
import torchvision
import torchvision.datasets as datasets
import torchvision.models as models
import torch.utils.data as data
import torchvision.transforms as transforms
import matplotlib.pyplot as plt
import numpy as np
import torch.cuda
import model

def testModel():
    # Load the data
    _, testloader = model.getTrainAndTestLoaders()
    dataiter = iter(testloader)
        
    # Load our trained model
    PATH = 'wild_net.pth'
    net = model.Net()
    net.load_state_dict(torch.load(PATH))
    
    '''
    # Test some sample images
    images, labels = dataiter.next()
    outputs = net(images)
    print(outputs)
    _, predicted = torch.max(outputs, 1)
    print('Predicted: ', ' '.join('%5s' % model.getClassNames()[predicted[j]]
                              for j in range(4)))
    '''

    # Let's see how it tests on the whole data set
    correct = 0
    total = 0
    with torch.no_grad():
        for data in testloader:
            images, labels = data
            outputs = net(images)
            _, predicted = torch.max(outputs.data, 1)
            total += labels.size(0)
            correct += (predicted == labels).sum().item()

    print('Accuracy of the network on the {0:.0f} test images: {1:.2f}%'.format(len(testloader), 100 * correct / total))

if __name__ == '__main__':
    testModel()
