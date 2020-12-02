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
        # Write the binary string representing the image to a file,
        # and use PIL's from-file image loader to make the PIL image "img" variable.
        # Transform to a tensor to pass into the model.
        with open("test", "wb") as f:
            f.write(request.body)
        
        with open("test", "rb") as f:
            img = Image.open(f)
            image_tensor = transforms.ToTensor()(img)

        # Loading the trained model
        PATH = 'wildlife/wild_net.pth'
        net = model.Net()
        net.load_state_dict(torch.load(PATH))

        # Transform the input and retrieve model prediction
        transform = transforms.Compose([transforms.Resize(size=(96, 96)), transforms.ToTensor()])
        input_img = torch.unsqueeze(transform(img), 0)
        probabilities = net(input_img)

        # Return the probabilities in Python list form (converted to a JS array in the HTTP response)
        return JsonResponse({'probabilities': torch.squeeze(probabilities).tolist()})
    else:
        return HttpResponse()
