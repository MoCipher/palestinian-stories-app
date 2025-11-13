def generate_unique_id():
    import uuid
    return str(uuid.uuid4())

def validate_image_file(file):
    allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
    if '.' in file.filename:
        extension = file.filename.rsplit('.', 1)[1].lower()
        if extension not in allowed_extensions:
            raise ValueError("Invalid image file type.")
    else:
        raise ValueError("No file extension found.")

def validate_video_file(file):
    allowed_extensions = {'mp4', 'mov', 'avi', 'mkv'}
    if '.' in file.filename:
        extension = file.filename.rsplit('.', 1)[1].lower()
        if extension not in allowed_extensions:
            raise ValueError("Invalid video file type.")
    else:
        raise ValueError("No file extension found.")

def format_timestamp(timestamp):
    return timestamp.strftime("%Y-%m-%d %H:%M:%S")