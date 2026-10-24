Find duplicate elements in a list.


Algorithm
1. Create a list of numbers.
2. Create an empty set to store duplicates and another set to track numbers already seen.
3. Visit each number.
4. If the number has already been seen, add it to duplicates.
5. Otherwise, add it to the seen set.
6. Print the duplicates.


numbers = [1, 2, 3, 2, 4, 1, 5]

seen = set()
duplicates = set()

for num in numbers:
    if num in seen:
        duplicates.add(num)
    else:
        seen.add(num)

print(duplicates)



Output: {1, 2}

--------------------------------------------------
--------------------------------------------------

Find the largest and smallest numbers in a list.

Algorithm
1. Create a list of numbers.
2. Use Python's max() function to find the largest.
3. Use min() to find the smallest.
4. Print both results.


numbers = [10, 5, 25, 3, 18]

largest = max(numbers)
smallest = min(numbers)

print("Largest:", largest)
print("Smallest:", smallest)


Output:
Largest: 25
Smallest: 3

--------------------------------------------------
-------------------------------------------------


Reverse a string.

Algorithm
1. Store a string.
2. Use slicing with [::-1].
3. Print the reversed string.


text = "python"

reversed_text = text[::-1]

print(reversed_text)


Output: nohtyp

--------------------------------------------------
--------------------------------------------------

Check whether a string is a palindrome.

Algorithm
1. Store a string.
2. Reverse the string.
3. Compare the original and reversed strings.
4. If equal, print that it is a palindrome; otherwise, print that it is not.


text = "madam"

if text == text[::-1]:
    print("Palindrome")
else:
    print("Not a palindrome")


Output: Palindrome

-----------------------------------------------------
-----------------------------------------------------


Count the frequency of each character in a string.

Algorithm
1. Store a string.
2. Create an empty dictionary.
3. Loop through each character.
4. If the character exists in the dictionary, increase its count.
5. Otherwise, set its count to 1.
6. Print the dictionary.


text = "hello"

frequency = dict()

for char in text:
    if char in frequency:
        frequency[char] += 1
    else:
        frequency[char] = 1

print(frequency)


Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}

-------------------------------------------------
-------------------------------------------------

Remove duplicates from a list.

Algorithm
1. Create the input list.
2. Create an empty list for unique numbers.
3. Loop through the input.
4. Add a number only if it is not already in the new list.
5. Print the new list.



numbers = [1, 2, 2, 3, 1, 4]

unique_numbers = []

for num in numbers:
    if num not in unique_numbers:
        unique_numbers.append(num)

print(unique_numbers)



Output: [1, 2, 3, 4]


----------------------------------------------
----------------------------------------------

Find the second-largest number in a list.

Algorithm
1. Remove duplicate values using a set.
2. Sort the remaining numbers.
3. Check that at least two distinct numbers exist.
4. Return the second-last number in ascending order.



numbers = [10, 5, 25, 25, 18]

unique_numbers = sorted(set(numbers))

if len(unique_numbers) >= 2:
    print(unique_numbers[-2])
else:
    print("No second-largest number")



 Output: 18


 --------------------------------------------------
 --------------------------------------------------

Check whether a number is prime.


1. Take a number.
2. If it is less than or equal to 1, it is not prime.
3. Check whether any integer from 2 up to its square root divides it evenly.
4. If a divisor exists, it is not prime.
5. Otherwise, it is prime.


num = 17
is_prime = True

if num <= 1:
    is_prime = False
else:
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break

if is_prime:
    print("Prime")
else:
    print("Not prime")



Output: Prime


--------------------------------------------------------
--------------------------------------------------------


Find factorial of a number.

Algorithm
1. Set the result to 1.
2. Loop from 1 to the given number.
3. Multiply the result by each number.
4. Print the result.



num = 5
factorial = 1

for i in range(1, num + 1):
    factorial = factorial * i

print(factorial)



Output: 120


----------------------------------------------------------
----------------------------------------------------------


Find common elements between two lists.

Algorithm
1. Create two lists.
2. Create an empty result list.
3. Loop through the first list.
4. Check whether each item exists in the second list and is not already in the result.
5. Add matching items and print the result.



list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]

common = []

for num in list1:
    if num in list2 and num not in common:
        common.append(num)

print(common)


Output: [3, 4]

---------------------------------------------------------------
---------------------------------------------------------------


Find pairs or triplets whose sum matches a target.


Algorithm
1. Take a list and a target number.
2. Loop through the list, selecting one number.
3. Loop through the remaining numbers.
4. If their sum equals the target, print the pair.



numbers = [2, 7, 11, 15]
target = 9

for i in range(len(numbers)):
    for j in range(i + 1, len(numbers)):
        if numbers[i] + numbers[j] == target:
            print(numbers[i], numbers[j])





Output: 2 7



------------------------------------------------------------------
------------------------------------------------------------------



Sort a dictionary by its values.

Algorithm
1. Store service names and error counts in a dictionary.
2. Use sorted() to sort dictionary items by their values.
3. Print the sorted result.



errors = {
    "payment": 15,
    "login": 5,
    "database": 20
}

sorted_errors = sorted(
    errors.items(),
    key=lambda item: item[1]
)

print(sorted_errors)



-------------------------------------------------------------
-------------------------------------------------------------


Find triplets whose sum is zero

Algorithm
1. Sort the list.
2. Select the first number using a loop.
3. Set a left pointer and a right pointer.
4. Calculate the sum of all three numbers.
5. If the sum is zero, save the triplet.
6. If the sum is negative, move the left pointer right.
7. If the sum is positive, move the right pointer left.
8. Skip duplicates and return the unique triplets.




def find_triplets(numbers):
    nums = sorted(numbers)
    result = []

    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left = i + 1
        right = len(nums) - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]

            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1

                while left < right and nums[left] == nums[left - 1]:
                    left += 1

                while left < right and nums[right] == nums[right + 1]:
                    right -= 1

            elif total < 0:
                left += 1
            else:
                right -= 1

    return result


numbers = [-1, 0, 1, 2, -1, -4]
print(find_triplets(numbers))




Output: [[-1, -1, 2], [-1, 0, 1]]



------------------------------------------------------------------------------
------------------------------------------------------------------------------


1. Log parsing and error detection

  Write a script to find ERROR messages in a log file.
  Count how many times a particular error occurs.
  Alert Slack if errors exceed a threshold.
  Find the top 5 most frequent errors.
  Find HTTP 500 errors in an Nginx access log.


---------------------------------------------------------------------

Read a log file and find errors

Algorithm
1. Open the log file in read mode.
2. Read it line by line.
3. Check whether a line contains ERROR.
4. Print matching lines.
5. Handle the case where the file does not exist.



try:
    with open("/var/log/application.log", "r") as file:
        for line in file:
            if "ERROR" in line:
                print(line.strip())

except FileNotFoundError:
    print("Log file not found")



    - Why use with open()? It closes the file automatically.
- Why use strip()? It removes the newline at the end of the line.
- What if the file is huge? Continue reading line by line rather than using readlines().

--------------------------------------------------------

Count how many times an error occurs


Algorithm
1. Set a counter to zero.
2. Read the log file line by line.
3. If a line contains ERROR, increase the counter.
4. Print the final count.



count = 0

try:
    with open("/var/log/application.log", "r") as file:
        for line in file:
            if "ERROR" in line:
                count += 1

    print("Total errors:", count)

except FileNotFoundError:
    print("Log file not found")



-------------------------------------------------------------

Send a Slack alert when errors are found


Algorithm
1. Read the log file.
2. Collect lines containing ERROR.
3. If errors are found, build a Slack message.
4. Send the message using a Slack webhook.
5. Check the HTTP response and handle failures.



import os
import requests

log_file = "/var/log/application.log"
slack_url = os.environ.get("SLACK_WEBHOOK_URL")

errors = []

try:
    with open(log_file, "r") as file:
        for line in file:
            if "ERROR" in line:
                errors.append(line.strip())

    if errors and slack_url:
        message = "\n".join(errors[:10])

        response = requests.post(
            slack_url,
            json={"text": f"Application errors:\n{message}"},
            timeout=5
        )
        response.raise_for_status()
        print("Slack alert sent")

    elif not errors:
        print("No errors found")
    else:
        print("Slack webhook is not configured")

except FileNotFoundError:
    print("Log file not found")
except requests.RequestException as error:
    print("Slack notification failed:", error)


    Possible follow-ups
- How do you prevent duplicate alerts? Track the last alert or use a cooldown period.
- How do you prevent the script from affecting production? Use bounded memory, timeouts, restricted permissions, and controlled polling intervals.
- How do you avoid leaking secrets? Store the webhook in a secret manager or protected environment variable.


----------------------------------------------

Check whether an API is healthy

Algorithm
1. Store the API URL.
2. Send an HTTP GET request.
3. Set a timeout.
4. Check the status code.
5. Print whether the API is healthy or unhealthy.



import requests

url = "https://example.com/health"

try:
    response = requests.get(url, timeout=5)

    if response.status_code == 200:
        print("API is healthy")
    else:
        print("API is unhealthy:", response.status_code)

except requests.RequestException as error:
    print("API check failed:", error)




 Is HTTP 200 always enough? No. We may also need to validate the response body, latency, and application-specific health indicators.



 ---------------------------------------------------------------------------


 Check disk usage


 Algorithm
1. Get disk usage for the required filesystem.
2. Read the percentage used.
3. Compare it against a threshold such as 80%.
4. Print a warning if the threshold is exceeded.



import shutil

path = "/"

usage = shutil.disk_usage(path)
used_percent = (usage.used / usage.total) * 100

print(f"Disk usage: {used_percent:.2f}%")

if used_percent >= 80:
    print("WARNING: Disk usage is high")
else:
    print("Disk usage is normal")




    How would you monitor all filesystems? Use a suitable system monitoring library such as psutil and iterate over mounted partitions.



---------------------------------------------------------


Execute a Linux command using Python
Algorithm
1. Import the subprocess module.
2. Define the Linux command.
3. Run it and capture the output.
4. Check for command failure.
5. Print the output or handle the error.






import subprocess

try:
    result = subprocess.run(
        ["df", "-h"],
        capture_output=True,
        text=True,
        check=True,
        timeout=10
    )

    print(result.stdout)

except subprocess.SubprocessError as error:
    print("Command failed:", error)



Possible follow-up: Why use subprocess instead of os.system()? It gives better control over output, return codes, and errors. Prefer passing the command as a list rather than constructing shell commands from untrusted input.



-------------------------------------------------------------------------------------------


Check whether a URL or service responds


Algorithm
1. Store a list of URLs.
2. Loop through each URL.
3. Send an HTTP GET request with a timeout.
4. Print the result for each endpoint.
5. Catch failures so one endpoint does not stop the remaining checks.



import requests

urls = [
    "https://example.com/health",
    "https://httpbin.org/status/200"
]

for url in urls:
    try:
        response = requests.get(url, timeout=5)

        if response.status_code == 200:
            print(url, "UP")
        else:
            print(url, "DOWN:", response.status_code)

    except requests.RequestException:
        print(url, "UNREACHABLE")


Possible follow-up: How do you prevent a slow service from hanging the script? Use request timeouts and, for larger checks, bounded concurrency.


 --------------------------------------------------------------------



 Find files larger than 100 MB
Algorithm
1. Select the directory to scan.
2. Loop through the files in that directory.
3. Get each file's size in bytes.
4. Convert the size to MB.
5. Print files larger than 100 MB.



from pathlib import Path

folder = Path("/var/log")

for file in folder.iterdir():
    if file.is_file():
        size_mb = file.stat().st_size / (1024 * 1024)

        if size_mb > 100:
            print(file.name, f"{size_mb:.2f} MB")




Possible follow-up: How would you scan subdirectories too? Use folder.rglob("*") instead of folder.iterdir().



------------------------------------------------------------------------



Find files older than 7 days
Algorithm
1. Select the directory.
2. Calculate the time from seven days ago.
3. Check each file's modification time.
4. Print files whose modification time is older than the cutoff.





from pathlib import Path
from datetime import datetime, timedelta

folder = Path("/var/log")
cutoff = datetime.now().timestamp() - timedelta(days=7).total_seconds()

for file in folder.iterdir():
    if file.is_file():
        if file.stat().st_mtime < cutoff:
            print("Old file:", file.name)




Possible follow-up: Would you delete these files automatically? Not immediately. First validate the directory, ownership, retention requirements, and matching criteria. A dry run is safer.



--------------------------------------------------------------------------


Test an API using Python
Question: How would you test an application API after deployment?
Algorithm
1. Send a request to the endpoint.
2. Verify the HTTP status code.
3. Check important fields in the response.
4. Report pass or fail.
5. Integrate the test into a CI/CD pipeline.



import requests

url = "https://example.com/health"

response = requests.get(url, timeout=5)

assert response.status_code == 200, "API check failed"

data = response.json()
assert data["status"] == "healthy", "Application is unhealthy"

print("API test passed")



Possible follow-up: How do you run this automatically? Use pytest in a CI/CD pipeline after deployment to a test environment.


----------------------------------------------------------------------



List EC2 instances using Python
Question: How can you automate AWS operations using Python?
Algorithm
1. Import the AWS SDK, boto3.
2. Create an EC2 client for the required AWS region.
3. Request the list of instances.
4. Read their instance IDs and states.
5. Print the results.




import boto3

ec2 = boto3.client("ec2", region_name="ap-south-1")

response = ec2.describe_instances()

for reservation in response["Reservations"]:
    for instance in reservation["Instances"]:
        print(
            instance["InstanceId"],
            instance["State"]["Name"]
        )




Possible follow-up: How do you list only stopped instances? Check whether instance["State"]["Name"] == "stopped" before printing.




-----------------------------------------------------------------------



Check Kubernetes pod status using Python
Question: How would you identify pods that are not running?
Algorithm
1. Import the Kubernetes Python client.
2. Load the appropriate Kubernetes configuration.
3. List pods in the target namespace.
4. Read each pod's phase.
5. Print pods that are not in the Running phase.




from kubernetes import client, config

config.load_kube_config()

v1 = client.CoreV1Api()
pods = v1.list_namespaced_pod(namespace="default")

for pod in pods.items:
    phase = pod.status.phase

    if phase != "Running":
        print(pod.metadata.name, phase)



Possible follow-up: Is every non-running pod unhealthy? No. A pod may be Pending during scheduling or Succeeded after a completed Job. For production troubleshooting, also inspect container states, restart counts, events, and readiness probes.

------------------------------------------------------------------------------------

What is the difference between read(), readline(), and readlines()?
- read() — reads the file's contents as a string.
- readline() — reads one line.
- readlines() — reads all lines into a list.


----------------------------------------------
How do you handle errors in Python?
Use try-except to handle expected failures.




try:
    number = int("abc")
except ValueError:
    print("Invalid number")


-----------------------------------------------------------


How do you prevent a script from running forever?
Use timeouts for network and subprocess operations, validate inputs, and limit retries.



import requests

try:
    response = requests.get(
        "https://example.com",
        timeout=5
    )
    print(response.status_code)
except requests.RequestException as error:
    print("Request failed:", error)




Interview answer: “I use timeouts, bounded retries, appropriate exception handling, and resource limits so a failure in one dependency does not block the entire automation.”



-----------------------------------------------------------------------------------------------


How do you schedule a Python script to run every five minutes?
On Linux, use cron.
Algorithm
1. Save the Python script to a known path.
2. Verify that it runs manually.
3. Add a cron entry.
4. Redirect output to a log file.
5. Monitor the execution and failures.


*/5 * * * * /usr/bin/python3 /opt/scripts/check_health.py >> /var/log/health-check.log 2>&1

----------------------------------


How do you avoid sending duplicate Slack alerts?
Algorithm
1. Identify the alert condition.
2. Store the last alert time or current incident state.
3. Check whether an alert has already been sent recently.
4. Send a new alert only if the cooldown has expired or the incident state changes.
5. Update the stored state.
Interview answer: “I implement deduplication and a cooldown period, and I send a recovery notification when the issue clears. For distributed production systems, I would use a durable shared store or a monitoring platform's alert deduplication rather than relying only on in-memory variables.”





-----------------------------------------------------------

How do you test a Python script?
Algorithm
1. Define expected input and output.
2. Test a normal case.
3. Test edge cases, such as empty input.
4. Test failure cases, such as missing files or API timeouts.
5. Run automated tests with pytest.



def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5



---------------------------------------------------------



How do you store passwords and API tokens securely?
Algorithm
1. Keep secrets out of source code.
2. Store them in an approved secrets manager or protected environment variable.
3. Grant only required access.
4. Avoid printing secrets in logs.
5. Rotate credentials when necessary.
Interview answer: “I use a secrets manager such as AWS Secrets Manager or HashiCorp Vault, apply least-privilege access, and never hardcode tokens in scripts or commit them to Git.”



---------------------------------------------------------------



Find the top 5 most frequent errors in a log file
Algorithm
1. Read the log file line by line.
2. Count each error message in a dictionary.
3. Sort the errors by count, highest first.
4. Print the top five.




from collections import Counter

error_counts = Counter()

with open("/var/log/application.log", "r") as file:
    for line in file:
        if "ERROR" in line:
            error_counts[line.strip()] += 1

for error, count in error_counts.most_common(5):
    print(count, error)



Simple explanation: Counter counts repeated messages, and most_common(5) returns the five most frequent ones.


-------------------------------------------------------------



Find HTTP 500 errors in an Nginx access log
Algorithm
1. Open the access log.
2. Read each line.
3. Identify lines with HTTP status code 500.
4. Print matching lines.



with open("/var/log/nginx/access.log", "r") as file:
    for line in file:
        fields = line.split()

        # In the standard Nginx combined format,
        # the HTTP status is typically field 9.
        if len(fields) > 8 and fields[8] == "500":
            print(line.strip())



-------------------------------------------------------------



Compare two directories and identify missing files
Algorithm
1. List filenames in the first directory.
2. List filenames in the second directory.
3. Compare the two sets.
4. Print filenames present in the first directory but missing from the second.





from pathlib import Path

dir1 = Path("/opt/app1")
dir2 = Path("/opt/app2")

files1 = {f.name for f in dir1.iterdir() if f.is_file()}
files2 = {f.name for f in dir2.iterdir() if f.is_file()}

missing = files1 - files2

print("Missing files:", missing)


Simple explanation: The set difference files1 - files2 identifies filenames that exist in the first directory but not in the second.



--------------------------------------------------------------



Archive old log files
Algorithm
1. Find log files in the specified directory.
2. Check their modification dates.
3. Select files older than the retention period.
4. Move or compress them into an archive.
5. Log the operation and verify the result.
Interview answer: “I would use Python's pathlib, datetime, and shutil modules to identify and archive old logs. I would validate the paths, preserve required logs, test in dry-run mode, and only delete originals after confirming the archive is valid.”


------------------------------------------------------------------



List S3 buckets using Python
Algorithm
1. Create an S3 client using boto3.
2. Call the S3 API to list buckets.
3. Loop through the returned bucket names.
4. Print them.



import boto3

s3 = boto3.client("s3")
response = s3.list_buckets()

for bucket in response["Buckets"]:
    print(bucket["Name"])


----------------------------------------------------------------


Find failed Kubernetes pods and collect their logs
Algorithm
1. Connect to the Kubernetes cluster.
2. List pods in the target namespace.
3. Inspect each pod's phase and container statuses.
4. Identify failed pods or containers with waiting/terminated states.
5. Print diagnostic information and retrieve logs where appropriate.
Interview answer: “I would use the Kubernetes Python client to list pods, inspect container states and restart counts, and collect logs from affected containers. I would also inspect pod events because logs alone may not explain scheduling or image-pull failures.”




----------------------------------------------------------------


How would you perform end-to-end application testing with Python?
Algorithm
1. Prepare a test environment and test data.
2. Create a test transaction through the API.
3. Verify the response and status code.
4. Retrieve the created transaction and validate the data.
5. Clean up test data where appropriate.
6. Run the test automatically in CI/CD.




import requests

base_url = "https://test.example.com"

# Step 1: Create a test order
response = requests.post(
    f"{base_url}/orders",
    json={"item": "book", "quantity": 1},
    timeout=5
)

assert response.status_code == 201

order = response.json()
order_id = order["id"]

# Step 2: Retrieve the order
response = requests.get(
    f"{base_url}/orders/{order_id}",
    timeout=5
)

assert response.status_code == 200
assert response.json()["id"] == order_id

print("End-to-end test passed")






--------------------------------------------------------



What is a list comprehension?


It creates a list in a compact way.


numbers = [1, 2, 3, 4, 5]

squares = [num * num for num in numbers]

print(squares)


Output: [1, 4, 9, 16, 25]
Algorithm: Visit each number, multiply it by itself, and add the result to a new list.


-----------------------------------------------------------------


1. Disk usage monitoring script
import shutilpath = "/"usage = shutil.disk_usage(path)used_percent = (usage.used / usage.total) * 100if used_percent > 80:    print("ALERT: Disk usage is high")else:    print("Disk usage is normal")



Questions the interviewer can ask
Q1. What is the purpose of this script?
Sample answer
This script checks disk utilization on a filesystem. If usage exceeds 80%, it prints an alert. It helps us identify disk capacity issues before they affect applications.

Q2. What is the shutil module?
It is a built-in Python module used for file operations, directory operations, and disk usage information. Here, shutil.disk_usage() returns the total, used, and free space for the specified filesystem.

Q3. Why do you use if used_percent > 80?
This is a threshold condition. If the disk usage crosses 80%, the script generates an alert. The threshold can be adjusted based on the application's requirements.

Q4. What if disk usage reaches 100%?
The script reports high disk usage. In production, I would send an alert through the monitoring system and investigate large log files, temporary files, or growing application data. I would not delete files automatically without appropriate safeguards.

Q5. How would you run this script on multiple servers?
I could use an approved automation runner or execute it on each server through Ansible or an SSH-based workflow. For a large environment, I would normally use centralized monitoring rather than repeatedly connecting to every server.

Q6. How would you improve this script for production?
I would add structured logging, exception handling, configurable thresholds, monitoring integration, and an appropriate exit code so a scheduler or pipeline can detect failures.


2. Application health-check script
import requestsurl = "https://example.com/health"try:    response = requests.get(url, timeout=5)    if response.status_code == 200:        print("Application is healthy")    else:        print("Application is unhealthy")except requests.RequestException as error:    print("Health check failed:", error)



Install the required library before running it:
pip install requests


Questions the interviewer can ask
Q1. Why did you use the requests library?
It allows Python to send HTTP requests to applications and APIs. I use it to check whether an application health endpoint is responding.

Q2. What is an HTTP status code 200?
It means the HTTP request succeeded. However, a successful response alone does not always guarantee that every application dependency is healthy.

Q3. Why do you use timeout=5?
It limits how long the script waits for the HTTP request. This prevents the script from waiting indefinitely for an unresponsive endpoint.

Q4. What is try-except in Python?
It handles errors without immediately terminating the script with an unhandled exception. Here, it catches request-related failures such as connection errors and timeouts.

Q5. What is the difference between a 4xx and a 5xx HTTP response?
- 4xx: The request has a client-side problem, such as 401 Unauthorized or 404 Not Found.
- 5xx: The server encountered a problem, such as 500 Internal Server Error or 503 Service Unavailable.

Q6. How would you monitor 100 application endpoints?
I would maintain a configuration file containing the endpoints, iterate through them using a loop, check each endpoint with a timeout, and publish the results to a monitoring or alerting system. I would also control concurrency to avoid overloading the endpoints.

Q7. How would you implement retries?
I would retry transient failures a limited number of times, using a delay or exponential backoff between attempts. I would avoid retrying indefinitely and would be careful with requests that can modify data.


3. Log monitoring script
This is a common DevOps/SRE automation scenario: finding application errors in log files.
log_file = "/var/log/myapp.log"with open(log_file, "r") as file:    for line in file:        if "ERROR" in line:            print("Error found:", line.strip())



Questions the interviewer can ask
Q1. What does this script do?
It reads an application log file line by line and prints any line containing the word ERROR. It helps identify errors without manually reading the entire log.

Q2. Why did you use with open()?
It opens the file and automatically closes it when the block finishes, even if an error occurs during processing.

Q3. What is the purpose of for line in file?
It iterates through the file one line at a time. This is generally more memory-efficient than loading a very large log file entirely into memory.

Q4. What does line.strip() do?
It removes leading and trailing whitespace, including the newline character at the end of the line. This makes the output cleaner.

Q5. What if the log file does not exist?
Python raises a FileNotFoundError. I would handle it with try-except, log the failure, and alert the operator if the missing file indicates a real problem.

Q6. How would you count errors instead of printing them?
I would initialize a counter to zero and increment it whenever a line contains ERROR. At the end, I would print the total number of matching lines.

Q7. How would you search for errors in real time?
For a simple Linux solution, I could use tail -F or a log-forwarding agent. In production, I would generally send logs to a centralized platform such as Elasticsearch, Splunk, or CloudWatch and configure alerts on relevant error patterns.


A likely follow-up is to count errors. Here is the simple version:
count = 0with open("/var/log/myapp.log", "r") as file:    for line in file:        if "ERROR" in line:            count = count + 1print("Total errors:", count)



Explain it this way: “I initialize a counter at zero, scan each line, increment the counter when an error is found, and print the total at the end.”
4. Delete old log files script
This question tests file handling and safe operational automation.
import osimport timefolder = "/tmp/myapp"days = 7current_time = time.time()for filename in os.listdir(folder):    filepath = os.path.join(folder, filename)    if os.path.isfile(filepath):        file_age = current_time - os.path.getmtime(filepath)        if file_age > days * 24 * 60 * 60:            print("Old file found:", filepath)



This version only identifies old files. It deliberately does not delete them.
Questions the interviewer can ask
Q1. What is the purpose of this script?
It identifies files older than seven days in a specified directory. It can be used as the first step in automating log retention and cleanup.

Q2. What does os.listdir() do?
It returns the names of entries inside a directory.

Q3. What does os.path.getmtime() return?
It returns the file's last modification time as a Unix timestamp, measured in seconds.

Q4. Why multiply by 24 * 60 * 60?
There are 24 hours in a day, 60 minutes in an hour, and 60 seconds in a minute. The multiplication converts seven days into seconds.

Q5. How would you safely delete old files in production?
First, I would use a dry run to list the files that qualify. Then I would validate the directory, retention policy, file ownership, and exclusions. After approval, I would enable deletion and record the files deleted in the logs.

Q6. Why shouldn't you delete files automatically without checks?
The script might delete important application data, active files, or files needed for an investigation. Cleanup must respect retention requirements and use an explicitly approved directory.


5. Check whether a Linux service is running
An interviewer may ask how Python can execute Linux commands.
import subprocessresult = subprocess.run(    ["systemctl", "is-active", "nginx"],    capture_output=True,    text=True)if result.stdout.strip() == "active":    print("Nginx is running")else:    print("Nginx is not running")



Run this on a Linux system with systemctl and the appropriate permissions.
Questions the interviewer can ask
Q1. What is the subprocess module?
It allows Python to execute external programs and commands, such as Linux utilities, and capture their output.

Q2. Why did you pass a list instead of a single command string?
It passes the executable and its arguments separately. This is generally safer than building a shell command from strings, especially when values come from external input.

Q3. What does capture_output=True mean?
It captures the command's standard output and standard error so the script can inspect them.

Q4. What does text=True do?
It returns captured output as text strings rather than raw bytes.

Q5. What if Nginx is inactive? Will this script restart it?
No. It only checks the status. I could add a controlled remediation step, but in production I would first verify the failure, permissions, restart policy, and alerting requirements.

Q6. How do you check whether a command failed?
I would inspect result.returncode. A return code of zero generally means success, while a nonzero code indicates failure. I would also inspect result.stderr for diagnostic information.


Important production improvement: use subprocess.run(..., timeout=10, check=False) to bound execution time. For scripts that must detect command failures, explicitly inspect the return code and log the error.
6. Python script to call an API
This scenario is relevant when automating monitoring systems, deployment platforms, or cloud services.
import requestsurl = "https://example.com/api/status"try:    response = requests.get(url, timeout=5)    response.raise_for_status()    data = response.json()    print(data)except requests.RequestException as error:    print("API request failed:", error)



Questions the interviewer can ask
Q1. What is a REST API?
A REST API allows systems to communicate over HTTP using methods such as GET, POST, PUT, PATCH, and DELETE.

Q2. What is the difference between GET and POST?
GET is generally used to retrieve information. POST is generally used to submit data or trigger an operation that creates a resource or performs an action.

Q3. What does raise_for_status() do?
It raises an exception for unsuccessful HTTP responses with status codes in the 4xx or 5xx range. The exception can then be handled by the except block.

Q4. What does response.json() do?
It parses a JSON response body into Python objects, typically a dictionary or a list.

Q5. How would you handle API authentication?
I would use the authentication method required by the API, such as a bearer token or OAuth. I would retrieve credentials from a secrets manager or protected environment variables, rather than hardcoding them in the script.

Q6. How would you handle rate limiting?
I would detect HTTP 429 Too Many Requests, respect the Retry-After header when provided, and retry with bounded backoff. I would also limit request volume.


7. Python script to check CPU and memory
import psutilcpu = psutil.cpu_percent(interval=1)memory = psutil.virtual_memory().percentprint("CPU usage:", cpu, "%")print("Memory usage:", memory, "%")if cpu > 80:    print("ALERT: High CPU usage")if memory > 80:    print("ALERT: High memory usage")



Install the dependency:
pip install psutil


Questions the interviewer can ask
Q1. What is psutil?
It is a Python library for retrieving system and process information, including CPU utilization, memory usage, and process statistics.

Q2. Why use interval=1 in cpu_percent()?
It measures CPU utilization over a one-second interval. This provides a more meaningful measurement than an immediate, non-blocking reading in many situations.

Q3. What if CPU utilization stays above 80%?
I would check the trend, identify CPU-intensive processes, inspect application logs and traffic, and correlate the spike with deployments or other events. I would not restart services automatically based on a single reading.

Q4. What is the difference between CPU and memory utilization?
CPU utilization measures processor activity. Memory utilization measures how much physical memory is being used. High values have different causes and require different troubleshooting steps.

Q5. How would you use this in Kubernetes?
For node and pod metrics, I would normally use Prometheus, Kubernetes metrics, and Grafana. Python could query the relevant API or metrics endpoint for custom automation, reporting, or remediation workflows.



------------------------------------------------------------------


Python Interview Questions — Short Answers
1. Why did you use a list to store errors?
A list stores all matching error messages so I can process them together and send them in one Slack notification.
2. How does the script know that an error occurred?
It checks each log line for the keyword ERROR. If the keyword is found, the script treats that line as an error.
3. What happens if the log file does not exist?
Python raises a FileNotFoundError. I handle it using try-except and print an appropriate message.
4. What happens if Slack is unavailable?
The HTTP request may fail or time out. I handle this using exception handling and can retry a limited number of times.
5. How would you handle a very large log file?
I would read the file line by line instead of loading the entire file into memory. This reduces memory usage.
6. How would you avoid sending duplicate alerts?
I would track previously alerted errors and implement a cooldown period so the same error does not trigger repeated notifications.
7. How would you store the Slack webhook securely?
I would store it in a secrets manager, such as AWS Secrets Manager or HashiCorp Vault, or use a protected environment variable. I would never hardcode it in the script or commit it to Git.
8. How would you run the script every five minutes?
On Linux, I would configure a cron job:
*/5 * * * * /usr/bin/python3 /opt/scripts/check_logs.py


This runs the script every five minutes.
9. How would you test the script without sending real Slack alerts?
I would mock the Slack HTTP request using unittest.mock or use a test function that prints the alert instead of sending it. This allows me to test the logic without contacting Slack.
10. What's the difference between a module and a library?
- Module: A single Python file containing reusable code, such as math.py.
- Library: A collection of reusable modules or packages that provide functionality, such as the requests library.
Interview tip: A module is generally one building block; a library is a broader collection of building blocks used to perform tasks.



What are Python libraries commonly used in DevOps/SRE?
Library/tool	Typical use
requests	HTTP requests and API checks
boto3	AWS automation
kubernetes	Kubernetes API automation
subprocess	Running Linux commands
pathlib	Working with file paths
shutil	File copying and disk utilities
re	Regular expressions and log parsing
json	Reading and writing JSON data
logging	Recording script activity and errors
pytest	Automated testing
psutil	CPU, memory, disk, and process information
datetime	Dates, timestamps, and retention checks
