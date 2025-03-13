import os
import sys
import subprocess


resultsfile=open('results.txt', 'wt')

skiplist=['helpers',
          '.vs',
          'ex_template.c',
          'ex_template.cs_dotnet',
          'ex_template.python',
          'pack.py',
          'ex_template.c_function',
          'ex_template.cs_dotnet_function',
          'ex_template.python_function',
          'testall.py',
          'ex_template.cpp',
          'ex_template.cs_mono',
          'ex_template.sql',
          'ex_template.cpp_function',
          'ex_template.cs_mono_function'
]

files=os.listdir('.')
sorted_files=sorted(files)
for file in sorted_files:
    if file in skiplist:
        continue
    if os.path.isdir(file):
        cmdline='"'+sys.executable+'" test.py'
        print(cmdline)
        #rc=os.system(cmdline)
        #print('#', rc)
        rc=subprocess.call(cmdline, shell=True, cwd=file)
        #print('#', rc)
        try:
            exresfile=open(file+'/tests/result.txt', 'rt')
            res=exresfile.read()
            #print('#',res)
            resultsfile.write(file+'\t'+res+'\n')
            exresfile.close()
        except:
            #Result file not found
            resultsfile.write(file+'\t'+'0\t0\n')
            pass

resultsfile.close()
