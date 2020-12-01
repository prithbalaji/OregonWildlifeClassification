from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import torch
import torchvision.transforms as transforms

# To allow importing model when the server is run from the server folder
import sys, os
sys.path.append(os.path.join(os.getcwd(), 'wildlife'))

import model

# Disables csrf (there may be a better way to just set the csrf cookie settings without disabling it entirely)
@csrf_exempt
def index(request):
    if request.method == "POST":
        print(request.content_type)
        print(len(request.body))
        print(request.body[0:10])
        print(type(request.body))
        with open("test", "wb") as f:
            f.write(request.body)

        with open("test", "rb") as f:
            img = Image.open(f)
            print(img.size)
            image_tensor = transforms.ToTensor()(img)
            print(type(image_tensor))
            print(image_tensor.size())

        PATH = 'wildlife/wild_net.pth'
        net = model.Net()
        net.load_state_dict(torch.load(PATH))
        transform = transforms.Compose([transforms.Resize(size=(96, 96)), transforms.ToTensor()])
        input_img = torch.unsqueeze(transform(img), 0)
        probabilities = net(input_img)

        print(torch.squeeze(probabilities).size())

        return JsonResponse({'probabilities': torch.squeeze(probabilities).tolist()})
    else:
        return HttpResponse()
