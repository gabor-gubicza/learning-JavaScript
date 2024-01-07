message_file='coding_qual_input.txt'
def decode(message_file):
    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Extracting numbers and words and storing them in a dictionary
    number_word_dict = {}
    for line in lines:
        number, word = line.split()
        number_word_dict[int(number)] = word

    # Constructing the pyramid and finding the numbers at the end of each line
    message_numbers = set()
    current_line = 1
    for i in range(1, max(number_word_dict.keys()) + 1):
        if i == current_line * (current_line + 1) // 2:
            message_numbers.add(i)
            current_line += 1

    # Constructing the message
    message = ' '.join(number_word_dict[number] for number in sorted(message_numbers))

    return message

decoded_message = decode(message_file)
print(decoded_message)

# print("Hello world")
