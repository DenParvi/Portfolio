from zipfile import ZipFile
import os

extensions=['.py', '.h', '.c', '.cpp', '.cs', '.sql', '.h5', '.npy', '.npz']

with ZipFile('allsrc.zip', 'w') as myzip:
    for file in os.listdir('.'):
        if os.path.isdir(file):
            for ex in extensions:
                if os.path.exists(file+'/src/my_code'+ex):
                    myzip.write(file+'/src/my_code'+ex)
